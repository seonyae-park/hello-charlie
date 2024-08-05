const flexClasses = {
  ".f-row-center": {
    display: "flex",
    flexDirection: "flex-row",
    justifyContent: "center",
    alignItems: "center",
  },
  ".f-row-between-center": {
    display: "flex",
    flexDirection: "flex-row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ".f-col-center": {
    display: "flex",
    flexDirection: "flex-col",
    justifyContent: "center",
    alignItems: "center",
  },
  ".f-col-between-stretch": {
    display: "flex",
    flexDirection: "flex-col",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
}

const spacing = {
  0: "0",
  2: "0.2rem",
  4: "0.4rem",
  6: "0.6rem",
  8: "0.8rem",
  10: "1rem",
  12: "1.2rem",
  16: "1.6rem",
  20: "2rem",
  24: "2.4rem",
  32: "3.2rem",
}

const borderRadius = {
  2: "0.2rem",
  4: "0.4rem",
  6: "0.6rem",
  8: "0.8rem",
  12: "1.2rem",
  16: "1.6rem",
  20: "2rem",
  24: "2.4rem",
  inherit: "inherit",
}

const fontSize = {
  xxs: "1rem",
  xs: "1.2rem",
  sm: "1.4rem",
  lg: "1.6rem",
  xl: "2rem",
}

module.exports = {
  flexClasses,
  spacing,
  borderRadius,
  fontSize,
}
