import { Box } from "@mui/material"
import LogoIcon from "@assets/Logo.svg"

async function Header() {
  return (
    <Box className="f-row-between-center-4 px-16 py-8 shadow-md h-[6.4rem]">
      <LogoIcon width="32" height="32" />
    </Box>
  )
}

export default Header
