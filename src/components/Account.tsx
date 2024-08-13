"use client"

import { Avatar, IconButton, Menu, MenuItem } from "@mui/material"
import { signOut } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"

interface ProfileProps {
  imageUrl?: string | null
}

function Account({ imageUrl }: ProfileProps) {
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
          <Image src={imageUrl} alt="profile" fill className="object-cover" />
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
