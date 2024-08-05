import { Box } from "@mui/material"
import LogoIcon from "@assets/Logo.svg"
// import { getServerSession } from "next-auth"
import LoginButton from "./LogInButton"
import Profile from "./Profile"

async function Header() {
  // const session = await getServerSession()
  const validSession = true
  return (
    <Box className="f-row-between-center-4 p-12">
      <LogoIcon width="32" height="32" />
      {validSession ? <LoginButton /> : <Profile imageUrl={""} />}
    </Box>
  )
}

export default Header
