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
          ...props.sx,
        }}
      >
        {props.name}
      </Typography>

      {!props.isView ? (
        <StyledInput
          id="input-with-icon-adornment"
          sx={props.sxi}
          maxRows={props.maxRows ? props.maxRows : 1}
          minRows={props.minRows ? props.minRows : 1}
          multiline={props.minRows ? true : false}
          startAdornment={
            props.isView == undefined || props.isView ? (
              <InputAdornment position="start">
                <img
                  src={require("../../assets/images/text-logo.png")}
                  style={{ width: "25px", marginRight: "5px" }}
                />
              </InputAdornment>
            ) : null
          }
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <Typography
          variant="h5"
          component="h5"
          sx={{ cursor: "pointer", ...props.sxEdit }}
        >
          {props.value}
        </Typography>
      )}
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
      sx={{ mb: 2, fontWeight: "bold", ...props.sx }}
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
            <img
              src={require("../../assets/images/password-logo.png")}
              style={{ width: "25px", marginRight: "5px" }}
            />
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
