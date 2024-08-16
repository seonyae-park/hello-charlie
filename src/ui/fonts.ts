// import { Inter, League_Gothic, Oxanium, Roboto_Mono } from "next/font/google"
import localFont from "next/font/local"

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// })
// const roboto_mono = Roboto_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-roboto-mono",
// })

// const leagueGothic = League_Gothic({
//   subsets: ["latin"],
//   fallback: ["Inter"],
//   weight: ["400"],
//   display: "swap",
//   variable: "--font-league-gothic",
// })

// const oxanium = Oxanium({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-oxanium",
//   display: "swap",
// })

const pretend = localFont({
  src: "./fonts/PretendardStdVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretend",
})

export { pretend }
