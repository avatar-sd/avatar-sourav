import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { MainListItems, SecondaryListItems } from "./listItems";
import { Button, Container } from "@mui/material";
import { ButtonComp } from "../input";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenUpdate } from "../../store/actions";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: "#212121",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardLayout(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.auth, shallowEqual);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    let varData = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (!authStore.data && varData) {
      dispatch(tokenUpdate(varData));
    }
  }, []);

  React.useEffect(() => {
    if (!authStore.data) {
      navigate("/login");
    }
  }, [authStore]);

  return (
    <Box sx={{ display: "flex" }}>
      {!props.noAppBar ? (
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
              backgroundColor: "#121212",
              borderBottom: "1px solid #212121",
            }}
          >
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                display: "none",
              }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, display: "flex", alignItems: "Center" }}
            >
              <img
                style={{
                  maxWidth: "40px",
                  marginTop: "5px",
                  marginRight: "20px",
                }}
                src={require("../../assets/images/logo_icon.png")}
              />
              {props.title}
            </Typography>
            {props.continue}
          </Toolbar>
        </AppBar>
      ) : null}
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton>
            <img
              style={{
                maxWidth: "40px",
                marginTop: "5px",
                marginLeft: "20px",
              }}
              src={require("../../assets/images/logo_icon.png")}
            />
          </IconButton>
        </Toolbar>
        {/* <Divider /> */}
        <List component="nav" sx={{height: "100%"}}>
          <MainListItems />
          <Divider sx={{ my: 1 }} />
          <div style={{position: "absolute", bottom: 20}}>
          <SecondaryListItems />
          </div>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container
          sx={{
            mt: props.noAppBar ? "0px" : "65px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: props.noAppBar ? "100vh" : "calc(100vh - 65px)",
            overflow: "hidden",
            overflowY: "scroll",
            maxWidth: "unset !important",
            backgroundColor: "#121212",
          }}
        >
          {props.children}
        </Container>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
