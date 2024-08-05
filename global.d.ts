declare module "*.svg" {
  import React from "react"
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module "tailwind-style" {
  type FlexClass = {
    display: string
    flexDirection: string
    justifyContent: string
    alignItems: string
  }

  type FlexClasses = {
    [key: string]: FlexClass
  }

  export const flexClasses: FlexClasses
  export const spacing: Record<string, string>
  export const borderRadius: Record<string, string>
  export const fontSize: Record<string, string>
}

declare module "*.png"
declare module "*.md"
