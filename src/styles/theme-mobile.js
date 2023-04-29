import { createTheme } from "@mui/material";

const themeMobile = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(", "),
    body1: {
      fontWeight: 700,
    },
  },

  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "rgb(255, 255, 255)",
        },
      },
    },

    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          color: "rgb(255, 255, 255, 0.6)",
          fontSize: "1rem",
          fontFamily: "inherit",
          fontWeight: "inherit",
          textTransform: "initial",

          "&.Mui-selected": {
            color: "rgb(255, 255, 255)",
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          padding: "0.75rem 1rem",
          borderRadius: "0.375rem",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(0, 0, 0)",
          fontWeight: 400,
          textTransform: "initial",
          ":hover": {
            backgroundColor: "rgb(255, 255, 255)",
          },
        },
      },
    },
  },
});

export { themeMobile };
