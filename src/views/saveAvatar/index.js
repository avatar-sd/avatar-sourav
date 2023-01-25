import { Box, Grid, Paper } from "@mui/material";
import * as React from "react";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Avatar from "../../sharedComponents/avatar";
import { Stack, Typography } from "@mui/material";
import { StyledOr } from "./style";

function SaveAvatar() {
  return (
    <DashboardLayout title="hii">
      <div style={{ width: "100%", height: "100%" }}>
        <Grid container spacing={2} sx={{marginTop: "10px"}}>
          <Grid item>
            <Box
              sx={{
                width: 150,
                height: 150,
                backgroundColor: "gray",
              }}
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: 150,
                height: 150,
                backgroundColor: "gray",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

export default SaveAvatar;
