import { Box, Container, Divider, Grid } from "@mui/material";
import * as React from "react";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Avatar from "../../sharedComponents/avatar";
import { Typography } from "@mui/material";
import {
  ButtonComp,
  InputComp,
  PasswordComp,
} from "../../sharedComponents/input";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function Preview() {
  const [page, setPage] = React.useState(4);
  const [value, setValue] = React.useState(0);
  const [name, setName] = React.useState("05");
  const [details, setDetails] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(()=> {
    setPage(1)
  },[])

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
        <span style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
          <ArrowBackIosIcon style={{ paddingTop: "5px" }} />
          Preview
        </span>
      }
    >
      <Grid item xs={12} md={4} lg={3}>
        <Box
          style={{
            backgroundColor: "#212121",
            width: "calc(95vw - 64px)",
            height: "calc(95vh - 64px)",
            borderRadius: "10px",
            textAlign: 'center'
          }}
        >
          <iframe
                src="http://13.232.214.9"
                style={{
                  width: "calc(95vw - 70px)",
                  height: "calc(95vh - 70px)",
                  border: "none",
                }}
              ></iframe>
        </Box>
      </Grid>
    </DashboardLayout>
  );
}

export default Preview;
