import Typography from "./Typography"

const BottomNavigation = {
  MuiBottomNavigation: {
    styleOverrides: {
      root: ({ theme }) => ({
        ".Mui-selected": {
          color: theme.vars.palette.primary.main,
          "> svg > path": {
            fill: theme.vars.palette.primary.main,
          },
        },
      }),
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      label: {
        ...Typography.body2XSmall,
        ".Mui-selected &": {
          ...Typography.title2XSmall,
        },
      },
    },
  },
}

export default BottomNavigation
