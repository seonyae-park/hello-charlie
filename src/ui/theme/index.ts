"use client"

import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { blue } from "@mui/material/colors"
import SvgIcon from "./components/SvgIcon"
import IconButton from "./components/IconButton"
import Typography from "./components/Typography"
import BottomNavigation from "./components/BottomNavigation"

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[700],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: blue[300],
        },
      },
    },
  },

  typography: Typography,
  components: {
    ...IconButton,
    ...BottomNavigation,
    ...SvgIcon,
  },
})

export default theme
