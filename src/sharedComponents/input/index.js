import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { StyledInput, StyledButton } from "./style";

const InputComp = (props) => {
  return (
    <FormControl variant="standard" style={{ width: "100%" }}>
      <Typography
        variant="p"
        component="p"
        sx={{
          mb: "5px",
        }}
      >
        {props.name}
      </Typography>
      <StyledInput
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </FormControl>
  );
};

const ButtonComp = (props) => {
  return (
    <StyledButton
      type={props.type}
      fullWidth
      variant={props.variant}
      startIcon={props.startIcon}
      onClick={props.onClick}
      sx={{ mb: 2, ...props.sx }}
    >
      {props.children}
    </StyledButton>
  );
};
const PasswordComp = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl variant="standard" style={{ width: "100%" }}>
      <Typography
        variant="p"
        component="p"
        sx={{
          mb: "5px",
        }}
      >
        {props.name}
      </Typography>
      <StyledInput
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{ mr: "5px" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </FormControl>
  );
};

export { InputComp, PasswordComp, ButtonComp };
