import { Avatar } from "@mui/material"

interface ProfileProps {
  imageUrl: string
}

function Profile({ imageUrl }: ProfileProps) {
  return <Avatar src={imageUrl} />
}

export default Profile
