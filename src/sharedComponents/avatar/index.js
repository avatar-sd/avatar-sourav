import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography, Stack } from "@mui/material";

const AvatarComponent = (props) => {
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Avatar
        sx={{ "&:hover": { outline: "4px solid white;" }, ...props.sx }}
        alt="image"
        src={props.image}
        onClick={props.onClick}
      />
      {props.text ? (
        <Typography component="h5" variant="h5">
          {props.text}
        </Typography>
      ) : null}
    </Stack>
  );
};

export default AvatarComponent;
