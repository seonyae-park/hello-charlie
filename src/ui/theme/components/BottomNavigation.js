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
}

export default BottomNavigation
