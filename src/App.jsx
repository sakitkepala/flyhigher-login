import * as React from "react";
import { styled } from "@mui/material/styles";

import {
  Box,
  Grid,
  Container,
  Stack,
  Typography,
  InputBase,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { FaGooglePlus } from "react-icons/fa";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

import bg from "./assets/slides/1.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "rgb(0, 0, 0)",
      }}
    >
      <Grid container flexGrow="1">
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Grid>
        <Grid item xs={12} md={5} alignSelf="center">
          <Container maxWidth="xs" sx={{ color: "rgb(255, 255, 255)" }}>
            <Stack spacing={4}>
              <Stack marginX="1.5rem" spacing={2.5}>
                <div>
                  <Box sx={{ maxWidth: 100, marginX: "auto" }}>
                    <Logo src={logo} />
                  </Box>
                  <Typography variant="h5" align="center">
                    Higher
                  </Typography>
                </div>
                <Button variant="contained" fullWidth startIcon={<FaGooglePlus />}>
                  Continue with Google
                </Button>
              </Stack>

              <Typography>Or Signin with</Typography>

              <Stack spacing={2.5}>
                <LoginField label="Email" />
                <PasswordField label="Password" />

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "rgb(3, 218, 198)",
                    ":hover": { backgroundColor: "rgb(3, 218, 198)" },
                  }}
                >
                  Sign in Account
                </Button>

                <Typography textAlign="center" sx={{ color: "rgb(255, 255, 255, 0.5)" }}>
                  Create an account?{" "}
                  <Typography component="a" sx={{ color: "rgb(3, 218, 198)" }} href="#">
                    Sign up
                  </Typography>
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

const Logo = styled("img")(() => ({
  maxWidth: "100%",
  display: "block",
}));

function LoginField({ label, ...props }) {
  return (
    <InputBase
      fullWidth
      placeholder={label}
      sx={{
        padding: "0.25rem 1rem",
        borderRadius: "10em",
        bgcolor: "rgb(9, 9, 9)",
        color: "rgb(255, 255, 255)",
        fontSize: "0.875rem",
        "::placeholder": { color: "rgb(255, 255, 255)" },
      }}
      {...props}
    />
  );
}

function PasswordField(props) {
  const [visible, setVisible] = React.useState(false);
  return (
    <LoginField
      type={visible ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setVisible((v) => !v)}
            edge="end"
            sx={{ color: "rgb(255, 255, 255)", fontSize: "1.125em" }}
          >
            {visible ? <IoEyeOffSharp /> : <IoEyeSharp />}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
}

export default App;
