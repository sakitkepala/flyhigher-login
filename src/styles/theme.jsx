import { CssBaseline, GlobalStyles, createTheme, ThemeProvider } from "@mui/material";

function FlyHigherMobileTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "rgb(0, 0, 0)",
            color: "rgb(255, 255, 255)",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
}

const theme = createTheme({
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
          padding: "0.5rem 1rem",
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

export { FlyHigherMobileTheme };
