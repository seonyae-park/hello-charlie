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
      className="w-[4.8rem] h-[4.8rem] rounded-full overflow-hidden"
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
