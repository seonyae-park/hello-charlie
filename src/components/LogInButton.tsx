"use client"

import { Button } from "@mui/material"
import { signIn } from "next-auth/react"

function LoginButton() {
  const onClick = async () => await signIn()
  return (
    <Button onClick={onClick} className="p-4 min-w-0">
      Login
    </Button>
  )
}

export default LoginButton
