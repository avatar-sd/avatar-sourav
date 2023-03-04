import { Box, Grid, Paper } from "@mui/material";
import * as React from "react";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Avatar from "../../sharedComponents/avatar";
import { Stack, Typography } from "@mui/material";
import { StyledOr } from "./style";
import AvatarComponent from "../../sharedComponents/avatar";
import { useNavigate } from "react-router-dom";
import { ButtonComp } from "../../sharedComponents/input";
import InsideAuthApi from "../../services/inSideAuth";

function SaveAvatar() {
  const navigate = useNavigate();
  const [variant, setVariant] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData([]);
    InsideAuthApi()
      .fetchAvatarApi()
      .then((data) => {
        if (data?.data) setData(data?.data);
      })
      .catch((x) => {
        console.log(x);
      });
  }, [variant]);

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
          ) : (
            <Grid item>
              {data?.map((x) => (
                <AvatarComponent
                  sx={{
                    bgcolor: "dimgrey",
                    width: 150,
                    height: 150,
                    borderRadius: "15px",
                  }}
                  image={x.previewPath}
                  onClick={() => navigate(`/preview?id=${x._id}`)}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </div>
    </DashboardLayout>
  );
}

export default SaveAvatar;
