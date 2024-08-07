"use client"

import { LoginRounded } from "@mui/icons-material"
import { Button } from "@mui/material"
import { signIn } from "next-auth/react"

function LoginButton() {
  const onClick = async () => await signIn()
  return (
    <Button onClick={onClick} className="p-0 min-w-0" variant="outlined">
      <LoginRounded sx={{ fontSize: 36 }} />
    </Button>
  )
}

export default LoginButton
