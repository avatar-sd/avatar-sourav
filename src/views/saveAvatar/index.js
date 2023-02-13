import { Box, Grid, Paper } from "@mui/material";
import * as React from "react";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Avatar from "../../sharedComponents/avatar";
import { Stack, Typography } from "@mui/material";
import { StyledOr } from "./style";
import AvatarComponent from "../../sharedComponents/avatar";
import { useNavigate } from "react-router-dom";
import { ButtonComp } from "../../sharedComponents/input";

function SaveAvatar() {
  const navigate = useNavigate();
  const [variant, setVariant] = React.useState(true);
  return (
    <DashboardLayout title="Collection">
      <div style={{ width: "100%", height: "100%" }}>
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid item>
            <ButtonComp
              variant={variant ? "contained" : ""}
              sx={{ mt: 3, mb: 2, minWidth: "150px" }}
              onClick={() => setVariant(true)}
            >
              Owned By
            </ButtonComp>
          </Grid>
          <Grid item>
            <ButtonComp
              variant={!variant ? "contained" : ""}
              sx={{ mt: 3, mb: 2, minWidth: "150px" }}
              onClick={() => setVariant(false)}
            >
              Created By
            </ButtonComp>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          {variant ? (
            <Grid item>
              <Avatar
                sx={{
                  bgcolor: "dimgrey",
                  width: 150,
                  height: 150,
                  borderRadius: "15px",
                }}
                image={require("../../assets/images/male.png")}
                onClick={() => navigate("/preview")}
              />
            </Grid>
          ) : null}
          <Grid item>
            <AvatarComponent
              sx={{
                bgcolor: "dimgrey",
                width: 150,
                height: 150,
                borderRadius: "15px",
              }}
              image={require("../../assets/images/female.png")}
              onClick={() => navigate("/preview")}
            />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

export default SaveAvatar;
