import { Box, Grid, Paper, Tab, Tabs } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Avatar from "../../sharedComponents/avatar";
import { Stack, Typography } from "@mui/material";
import { StyledOr } from "./style";
import { ButtonComp } from "../../sharedComponents/input";

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
      title={<span>&#60; Step 1 of 4: Select Your Bodytype</span>}
      continue={
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
        >
          Continue
        </ButtonComp>
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
              Select yoyr body type
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              {/* <a href="http://13.232.214.9/"> */}
              <Avatar
                sx={{ bgcolor: "deepGray", width: 200, height: 200 }}
                // image={
                //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                // }
                text="Male"
              />
              {/* </a> */}
              <StyledOr component="p" variant="p">
                OR
              </StyledOr>
              <Avatar
                sx={{ bgcolor: "deepGray", width: 200, height: 200 }}
                // image={
                //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                // }
                text="Female"
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
                  // image={
                  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                  // }
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  // image={
                  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                  // }
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  // image={
                  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                  // }
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  // image={
                  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                  // }
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  // image={
                  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                  // }
                />
              </Grid>
              <Grid item>
                <Avatar
                  sx={{ bgcolor: "deepGray", width: 100, height: 100 }}
                  // image={
                  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                  // }
                />
              </Grid>
            </Grid>
          </Paper>
        ) : page === 3 ? (
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
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
                    // image={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W71UTcSBm3r5l9NzBemglq983bYvKOHRkw&usqp=CAU"
                    // }
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        ) : null}
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
