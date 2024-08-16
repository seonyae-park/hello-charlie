"use client"

import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { User } from "@type/auth"
import Account from "./Account"

type ProfileProps = {
  user: User
}

function Profile({ user }: ProfileProps) {
  const router = useRouter()

  const onProfileClick = () => {
    router.push("/mypage")
  }

  return (
    <Button
      className="f-row-start-center-16 p-20 justify-start"
      fullWidth
      onClick={onProfileClick}
    >
      <Box className="m-20 w-[3.6rem]">
        <Image
          src={user.image ?? ""}
          alt="profile"
          className="rounded-full"
          priority
          sizes="100vh"
          style={{
            width: "3.6rem",
            height: "3.6rem",
            objectFit: "cover",
          }}
        />
        <Typography typography="bodyXSmall">{user.name}</Typography>
      </Box>
    </Button>
  )
}

export default Profile
