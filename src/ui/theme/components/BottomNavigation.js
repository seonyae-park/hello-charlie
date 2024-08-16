const BottomNavigation = {
  MuiBottomNavigation: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: "6.4rem",
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
        fontWeight: 400,
        fontSize: "1.2rem",
        lineHeight: "2.2rem",

        ".Mui-selected &": {
          fontWeight: 600,
          fontSize: "1.2rem",
          lineHeight: "2.2rem",
        },
      },
    },
  },
}

export default BottomNavigation
