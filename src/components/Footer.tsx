"use client"

import { useState } from "react"
import {
  CalendarMonthRounded,
  HomeRounded,
  PersonRounded,
} from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"

function Footer() {
  const [bottomTab, setBottomTab] = useState(0)

  return (
    <BottomNavigation
      showLabels
      value={bottomTab}
      onChange={(_, value) => {
        setBottomTab(value)
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeRounded />} />
      <BottomNavigationAction
        label="Calendar"
        icon={<CalendarMonthRounded />}
      />
      <BottomNavigationAction label="User" icon={<PersonRounded />} />
    </BottomNavigation>
  )
}

export default Footer
