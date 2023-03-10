import { Box, Grid, Paper } from "@mui/material";
import * as React from "react";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Avatar from "../../sharedComponents/avatar";
import { Stack, Typography } from "@mui/material";
import { StyledOr } from "./style";
import AvatarComponent from "../../sharedComponents/avatar";
import { useNavigate } from "react-router-dom";
import { ButtonComp } from "../../sharedComponents/input";

function Announcement() {
  const navigate = useNavigate();
  const [variant, setVariant] = React.useState(true);
  return (
    <DashboardLayout title="Announcement">
      <div style={{ width: "100%", height: "100%" }}>
        <iframe
        src=''
          style={{
            width: "calc(100vw - 60px)",
            height: "100vh",
            border: "0px",
          }}
        ></iframe>
      </div>
    </DashboardLayout>
  );
}

export default Announcement;
