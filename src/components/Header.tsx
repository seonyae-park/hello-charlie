import { Box } from "@mui/material"
import LogoIcon from "@assets/Logo.svg"
import { getServerSession } from "next-auth"
import LoginButton from "@components/LogInButton"
import Account from "@components/Account"

async function Header() {
  const session = await getServerSession()
  return (
    <Box className="f-row-between-center-4 px-12 py-8 shadow-md">
      <LogoIcon width="32" height="32" />
      {session ? <Account imageUrl={session.user?.image} /> : <LoginButton />}
    </Box>
  )
}

export default Header
