import { createTheme } from "@mui/material";

const themeWeb = createTheme({
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
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: "2em",
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

export { themeWeb };
