"use client"

import { signIn } from "next-auth/react"
import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import KaKaoLoginIcon from "@assets/LoginKakao.svg"
import NaverLoginIcon from "@assets/LoginNaver.svg"

function Page() {
  const login = async (provider: string) =>
    await signIn(provider, { callbackUrl: "/home" })

  return (
    <Box className="w-screen h-screen f-col-center-16">
      <Image src="/elephant.png" alt="logo" width="200" height="200" priority />
      <Typography typography="titleSmall" className="text-">
        Sign In To Your Social Account
      </Typography>
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
