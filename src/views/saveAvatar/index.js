import { Box, Grid, Paper } from "@mui/material";
import * as React from "react";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Avatar from "../../sharedComponents/avatar";
import { Stack, Typography } from "@mui/material";
import { StyledOr } from "./style";
import AvatarComponent from "../../sharedComponents/avatar";

function SaveAvatar() {
  return (
    <DashboardLayout title="hii">
      <div style={{ width: "100%", height: "100%" }}>
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid item>
            <Avatar
              sx={{
                bgcolor: "deepGray",
                width: 150,
                height: 150,
                borderRadius: "15px",
              }}
              image={require("../../assets/images/male.png")}
            />
          </Grid>
          <Grid item>
            <AvatarComponent
              sx={{
                bgcolor: "deepGray",
                width: 150,
                height: 150,
                borderRadius: "15px",
              }}
              image={require("../../assets/images/female.png")}
            />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

export default SaveAvatar;
