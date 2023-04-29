import * as React from "react";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  BrowserRouter as Router,
  Outlet,
  Link,
  useMatch,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { Container, Box, Typography } from "@mui/material";
import { Tabs, Tab } from "@mui/material";

import bg from "../assets/background.png";
import logo from "../assets/logo.png";

function Root() {
  const isLargeScreen = useMediaQuery("(min-width: 760px)");
  const match = useMatch("/");
  const navigate = useNavigate();
  const location = useLocation();

  const isRoot = Boolean(match);

  if (isRoot && !isLargeScreen) {
    navigate("/signin");
    return null; // redirect
  }

  if (!isRoot && isLargeScreen) {
    navigate("/");
    return null; // redirect
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Box sx={{ maxWidth: 100, marginX: "auto" }}>
          <Logo src={logo} />
        </Box>

        <Typography variant="h6" align="center">
          Higher
        </Typography>

        <Tabs value={location?.pathname}>
          <Tab label="Sign In" value="/signin" href="/signin" LinkComponent={TabRouter} />
          <Tab label="Sign Up" value="/signup" href="/signup" LinkComponent={TabRouter} />
        </Tabs>

        <Outlet />
      </Container>
    </Box>
  );
}

const Logo = styled("img")(() => ({
  maxWidth: "100%",
  display: "block",
}));

const TabRouter = React.forwardRef(({ href, ...props }, ref) => {
  return <Link ref={ref} to={href} {...props} />;
});

export { Root };
