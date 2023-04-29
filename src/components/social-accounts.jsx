import { Typography, Stack, Box, IconButton } from "@mui/material";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

function SocialAccounts({ label }) {
  return (
    <Stack spacing={1.5}>
      <Typography sx={{ maxWidth: "28ch", color: "rgb(255, 255, 255, 0.6)", fontSize: "0.875rem" }}>
        {label}
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={3}>
        <IconButton>
          <IconCircle>
            <FaGoogle />
          </IconCircle>
        </IconButton>

        <IconButton>
          <IconCircle>
            <FaApple />
          </IconCircle>
        </IconButton>

        <IconButton>
          <IconCircle>
            <FaFacebookF />
          </IconCircle>
        </IconButton>
      </Stack>
    </Stack>
  );
}

function IconCircle({ children }) {
  return (
    <Box
      sx={{
        fontSize: "1.25rem",
        width: "2em",
        height: "2em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: "rgb(0, 0, 0)",
        color: "rgb(255, 255, 255)",
      }}
    >
      {children}
    </Box>
  );
}

export { SocialAccounts };
