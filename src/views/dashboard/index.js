import { Box, Grid, Paper, Tab, Tabs } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Avatar from "../../sharedComponents/avatar";
import { Stack, Typography } from "@mui/material";
import { StyledOr } from "./style";
import { ButtonComp } from "../../sharedComponents/input";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Dashboard() {
  const [page, setPage] = React.useState(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <DashboardLayout
      // title={ ` Step 1 of 4: Select Your Bodytype`}
      title={
        page === 1 ? (
          <span style={{ cursor: "pointer" }}>
            Step 1 of 4: Select Your Bodytype
          </span>
        ) : page === 2 ? (
          <span style={{ cursor: "pointer" }} onClick={() => setPage(1)}>
            <ArrowBackIosIcon style={{ paddingTop: "5px" }} /> Step 2 of 4: Pick
            an Avatar
          </span>
        ) : page === 3 ? (
          <span style={{ cursor: "pointer" }} onClick={() => setPage(2)}>
            <ArrowBackIosIcon style={{ paddingTop: "5px" }} /> Step 3 of 4:
            Customize Avatar
          </span>
        ) : null
      }
      continue={
        page > 0 && page < 3 ? (
          <ButtonComp
            variant="contained"
            sx={{
              maxWidth: 200,
              margin: 0,
              height: "100%",
              borderRadius: "0 !important",
              position: "absolute",
              right: 0,
            }}
            onClick={() => setPage(page + 1)}
          >
            Continue
          </ButtonComp>
        ) : null
      }
    >
      <Grid item xs={12} md={4} lg={3}>
        {page === 1 ? (
          <Paper
            sx={{
              p: 5,
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
            }}
          >
            <Typography
              component="h5"
              variant="h5"
              sx={{ textAlign: "center", mb: 3 }}
            >
              Select your body type
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Avatar
                sx={{ bgcolor: "deepGray", width: 200, height: 200 }}
                image={require("../../assets/images/male.png")}
                text="Male"
                onClick={() => setPage(2)}
              />
              <StyledOr component="p" variant="p">
                OR
              </StyledOr>
              <Avatar
                sx={{ bgcolor: "deepGray", width: 200, height: 200 }}
                image={require("../../assets/images/female.png")}
                text="Female"
                onClick={() => setPage(2)}
              />
            </Stack>
          </Paper>
        ) : page == 2 ? (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
              maxWidth: 470,
              p: 5,
            }}
          >
            <Typography
              component="h5"
              variant="h5"
              sx={{ textAlign: "center", mb: 3 }}
            >
              Pick an Avatar
            </Typography>
            <Grid container spacing={5}>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-1.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-2.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-3.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-4.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-5.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-6.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-7.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-8.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  image={require("../../assets/images/male-1.png")}
                  onClick={() => setPage(3)}
                />
              </Grid>
            </Grid>
          </Paper>
        ) : page === 3 ? (
          <Grid item xs={12} md={12} lg={12}>
            <iframe
              src="http://13.232.214.9"
              style={{ width: "100vw", height: "calc(100vh - 55px)" }}
            ></iframe>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: (window.innerHeight * 4) / 5,
                position: "absolute",
                left: "100px",
                backgroundColor: "gray",
                borderRadius: "15px",
                bottom: "30px",
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab
                  icon={
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  }
                  label=""
                  {...a11yProps(0)}
                />
                <Tab
                  icon={
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  }
                  label=""
                  {...a11yProps(1)}
                />
                <Tab
                  icon={
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  }
                  label=""
                  {...a11yProps(2)}
                />
                <Tab
                  icon={
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  }
                  label=""
                  {...a11yProps(3)}
                />
                <Tab
                  icon={
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  }
                  label=""
                  {...a11yProps(4)}
                />
                <Tab
                  icon={
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  }
                  label=""
                  {...a11yProps(5)}
                />
                <Tab
                  icon={
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  }
                  label=""
                  {...a11yProps(6)}
                />
              </Tabs>
              <TabPanel value={value} index={0} style={{ width: 280 }}>
                <Grid container spacing={5}>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/componentItem.png")}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1} style={{ width: 280 }}>
                <Grid container spacing={5}>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/female.png")}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/female.png")}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/female.png")}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2} style={{ width: 280 }}>
                <Grid container spacing={5}>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/female.png")}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/female.png")}
                    />
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        bgcolor: "deepGray",
                        width: 50,
                        height: 50,
                        borderRadius: "15px",
                      }}
                      image={require("../../assets/images/female.png")}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </Grid>
        ) : null}
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
