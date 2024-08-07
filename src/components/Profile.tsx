"use client"

import { Avatar, IconButton } from "@mui/material"
import { signOut } from "next-auth/react"
import Image from "next/image"

interface ProfileProps {
  imageUrl?: string | null
}

function Profile({ imageUrl }: ProfileProps) {
  const onClick = async () => await signOut()

  return (
    <IconButton
      className="w-[3.6rem] h-[3.6rem] rounded-full overflow-hidden"
      onClick={onClick}
    >
      {imageUrl ? (
        <Image src={imageUrl} alt="profile" fill className="object-cover" />
      ) : (
        <Avatar />
      )}
    </IconButton>
  )
}

export default Profile
