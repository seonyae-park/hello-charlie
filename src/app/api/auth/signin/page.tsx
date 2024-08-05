"use client"

import { signIn } from "next-auth/react"
import { Box, Button } from "@mui/material"
import KaKaoLoginIcon from "@assets/LoginKakao.svg"
import NaverLoginIcon from "@assets/LoginNaver.svg"

function Page() {
  const login = async (provider: string) =>
    await signIn(provider, { callbackUrl: "/home" })

  return (
    <Box className="w-screen h-screen f-col-center">
      <Box className="f-col-center-8">
        <Button className="p-0 rounded-lg" onClick={() => login("kakao")}>
          <KaKaoLoginIcon />
        </Button>
        <Button className="p-0 rounded-lg" onClick={() => login("naver")}>
          <NaverLoginIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default Page
