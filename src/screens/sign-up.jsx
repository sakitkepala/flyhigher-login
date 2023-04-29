import { Stack, Typography, Button } from "@mui/material";
import { LoginField, PasswordField } from "../components/login";

function ScreenSignUp() {
  return (
    <Stack spacing={2.5} alignItems="center">
      <Stack spacing={1.5}>
        <LoginField label="Email Address or Phone Number" />
        <PasswordField label="Password" />
        <PasswordField label="Confirm Password" />
      </Stack>

      <Button
        sx={{
          minWidth: "15rem",
          backgroundColor: "rgb(3, 218, 198)",
          color: "rgb(255, 255, 255)",
          fontWeight: 700,
          ":hover": { backgroundColor: "rgb(3, 218, 198)" },
        }}
      >
        Create Account
      </Button>

      <Typography>Or use a social account to create account</Typography>
    </Stack>
  );
}

export default ScreenSignUp;
