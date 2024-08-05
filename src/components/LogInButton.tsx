"use client"

import { LoginRounded } from "@mui/icons-material"
import { Button } from "@mui/material"
import { signIn } from "next-auth/react"

function LoginButton() {
  const onClick = async () => await signIn()
  return (
    <Button onClick={onClick}>
      <LoginRounded />
    </Button>
  )
}

export default LoginButton
