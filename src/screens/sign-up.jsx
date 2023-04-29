import { Stack, Typography, Button } from "@mui/material";
import { LoginField, PasswordField } from "../components/login";
import { SocialAccounts } from "../components/social-accounts";

function ScreenSignUp() {
  return (
    <Stack sx={{ width: "100%" }} alignItems="center" spacing={2.5}>
      <Stack spacing={1.5} sx={{ width: "80%" }}>
        <LoginField label="Email Address or Phone Number" />
        <PasswordField label="Password" />
        <PasswordField label="Confirm Password" />
      </Stack>

      <Button
        sx={{
          minWidth: "12.5rem",
          backgroundColor: "rgb(3, 218, 198)",
          color: "rgb(255, 255, 255)",
          fontWeight: 700,
          ":hover": { backgroundColor: "rgb(3, 218, 198)" },
        }}
      >
        Create Account
      </Button>

      <SocialAccounts label="Or use a social account to create account" />
    </Stack>
  );
}

export default ScreenSignUp;
