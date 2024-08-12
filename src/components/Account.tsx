"use client"

import { useState } from "react"
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material"
import { signOut } from "next-auth/react"
import Image from "next/image"

interface AccountProps {
  imageUrl?: string | null
}

function Account({ imageUrl }: AccountProps) {
  const [menuAnchorEl, setMenuAnchorEl] = useState<
    HTMLButtonElement | undefined
  >()
  const handleLogout = async () => await signOut()

  return (
    <>
      <IconButton
        className="w-[3.2rem] h-[3.2rem] rounded-full overflow-hidden"
        onClick={(e) =>
          setMenuAnchorEl(menuAnchorEl ? undefined : e.currentTarget)
        }
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="profile"
            fill
            sizes="100vh"
            className="object-cover"
            priority
          />
        ) : (
          <Avatar />
        )}
      </IconButton>
      <Menu
        open={!!menuAnchorEl}
        anchorEl={menuAnchorEl}
        onClose={() => setMenuAnchorEl(undefined)}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default Account
