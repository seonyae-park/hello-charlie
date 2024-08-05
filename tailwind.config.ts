import type { Config } from "tailwindcss"
import type { PluginAPI } from "tailwindcss/types/config"
import plugin from "tailwindcss/plugin"
import { FlexClass } from "tailwind-style"
import { flexClasses, spacing, borderRadius, fontSize } from "./src/ui/tailwind"

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    spacing: spacing,
    extend: {
      spacing,
      borderRadius,
      fontSize,
    },
  },
  plugins: [
    plugin(({ addUtilities, matchUtilities, theme }: PluginAPI) => {
      addUtilities({
        ...flexClasses,
      })
      matchUtilities(
        Object.fromEntries(
          Object.entries<FlexClass>(flexClasses).map(([k, v]) => [
            k.slice(1),
            (gap) => ({ ...v, gap }),
          ])
        ),
        { values: theme("spacing") }
      )
    }),
  ],
}
export default config
