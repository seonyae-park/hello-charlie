"use client"

import { useEffect, useState } from "react"
import {
  CalendarMonthRounded,
  HomeRounded,
  MapRounded,
  PersonRounded,
} from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { useRouter, usePathname } from "next/navigation"

function Footer() {
  const router = useRouter()
  const [bottomTab, setBottomTab] = useState("/home")

  const onBottomTabClick = (tab: string) => {
    if (tab === bottomTab) return
    router.push(tab)
  }

  const pathname = usePathname()
  useEffect(() => {
    if (pathname) {
      setBottomTab(pathname)
    }
  }, [pathname])

  return (
    <BottomNavigation
      showLabels
      value={bottomTab}
      onChange={(_, value) => {
        setBottomTab(value)
      }}
    >
      <BottomNavigationAction
        value="/home"
        onClick={() => onBottomTabClick("/home")}
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
        onClick={() => onBottomTabClick("/map")}
        value="/map"
        label="Map"
        icon={<MapRounded />}
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
