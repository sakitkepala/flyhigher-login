import * as React from "react";
import { InputBase, InputAdornment, IconButton } from "@mui/material";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

function LoginField({ label, ...props }) {
  return (
    <InputBase
      fullWidth
      placeholder={label}
      sx={{
        padding: "0.75rem 1rem",
        borderRadius: "0.375rem",
        bgcolor: "rgb(255, 255, 255)",
        color: "rgb(0, 0, 0, 0.8)",
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

export { LoginField, PasswordField };
