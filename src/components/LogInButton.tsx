"use client"

import { Avatar, Button, Typography } from "@mui/material"
import { signIn } from "next-auth/react"

function Login() {
  const onClick = async () => await signIn()
  return (
    <Button onClick={onClick} className="p-20 f-row-start-center-12 w-full">
      <Avatar />
      <Typography typography="bodyXSmall">로그인</Typography>
    </Button>
  )
}

export default Login
