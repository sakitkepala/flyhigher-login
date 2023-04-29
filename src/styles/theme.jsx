import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { themeWeb } from "./theme-web";
import { themeMobile } from "./theme-mobile";

function FlyHigherTheme({ children }) {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  if (isLargeScreen) {
    return (
      <ThemeProvider theme={themeWeb}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={themeMobile}>
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

export { FlyHigherTheme };
