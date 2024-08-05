"use client"

import { Button } from "@mui/material"
// import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

function LoginButton() {
  // const { data } = useSession()

  const onClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    // data ? await signOut() : await signIn("kakao")
  }

  return (
    <div>
      <Button>Avatar</Button>
      <Link href="#" onClick={onClick}>
        SignIn
      </Link>
    </div>
  )
}

export default LoginButton
