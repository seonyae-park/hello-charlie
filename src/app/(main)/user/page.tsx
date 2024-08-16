import Login from "@components/LogInButton"
import Profile from "@components/Profile"
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material"
import { getServerSession } from "next-auth"

async function Page() {
  const session = await getServerSession()
  return (
    <Box className="f-col-stretch-start size-full bg-blue-100">
      {session ? (
        <Profile
          user={{
            name: session!.user?.name ?? "",
            image: session!.user?.image ?? "",
          }}
        />
      ) : (
        <Login />
      )}
      <Box typography="bodyXSmall">
        <List className="">
          <ListItem>
            <ListItemButton className="f-row-start-center-8">
              🧅<Typography>공지사항</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className="f-row-start-center-8">
              🍤<Typography>설정</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Page
