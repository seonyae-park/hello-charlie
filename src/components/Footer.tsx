"use client"

import { useState } from "react"
import {
  CalendarMonthRounded,
  HomeRounded,
  PersonRounded,
} from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { useRouter } from "next/navigation"

function Footer() {
  const router = useRouter()
  const [bottomTab, setBottomTab] = useState("/home")

  const onBottomTabClick = (tab: string) => {
    if (tab === bottomTab) return
    router.push(tab)
  }

  return (
    <BottomNavigation
      className="text-xl"
      showLabels
      value={bottomTab}
      onChange={(_, value) => {
        setBottomTab(value)
      }}
    >
      <BottomNavigationAction
        value="/home"
        onClick={() => onBottomTabClick("/home")}
        className="text-lg"
        label="Home"
        icon={<HomeRounded />}
      />
      <BottomNavigationAction
        onClick={() => onBottomTabClick("/calendar")}
        value="/calendar"
        label="Calendar"
        icon={<CalendarMonthRounded />}
      />
      <BottomNavigationAction
        onClick={() => onBottomTabClick("/user")}
        value="/user"
        label="User"
        icon={<PersonRounded />}
      />
    </BottomNavigation>
  )
}

export default Footer
