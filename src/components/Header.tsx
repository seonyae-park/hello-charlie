import { Box } from "@mui/material"
import LogoIcon from "@assets/Logo.svg"
import { getServerSession } from "next-auth"
import LoginButton from "./LogInButton"
import Profile from "./Profile"

async function Header() {
  const session = await getServerSession()
  return (
    <Box className="f-row-between-center-4 px-16 py-8 shadow-lg">
      <LogoIcon width="32" height="32" />
      {session ? <Profile imageUrl={session.user?.image} /> : <LoginButton />}
    </Box>
  )
}

export default Header
