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

import { Container, Box, Stack, Typography } from "@mui/material";
import { Tabs, Tab } from "@mui/material";

import bg from "../assets/background.png";
import logo from "../assets/logo-alpha.png";

function Root({ children }) {
  const isLargeScreen = useMediaQuery("(min-width: 760px)");
  const match = useMatch("/");
  const navigate = useNavigate();
  const location = useLocation();

  const isRoot = Boolean(match);

  React.useEffect(() => {
    if (isRoot && !isLargeScreen) {
      navigate("/signin");
    } else if (!isRoot && isLargeScreen) {
      navigate("/");
    }
  }, [isRoot, isLargeScreen]);

  if (!isRoot && isLargeScreen) {
    return null;
  }

  if (isRoot && !isLargeScreen) {
    return null; // redirect
  }

  if (isRoot && isLargeScreen) {
    return children;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ mt: "8vh", textAlign: "center" }}>
        <Stack spacing={2.5} alignItems="center">
          <div>
            <Box sx={{ maxWidth: 100, marginX: "auto" }}>
              <Logo src={logo} />
            </Box>
            <Typography align="center">Higher</Typography>
          </div>

          <Tabs value={location?.pathname}>
            <Tab label="Sign In" value="/signin" href="/signin" LinkComponent={TabRouter} />
            <Tab label="Sign Up" value="/signup" href="/signup" LinkComponent={TabRouter} />
          </Tabs>

          <Outlet />
        </Stack>
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

export default Root;
