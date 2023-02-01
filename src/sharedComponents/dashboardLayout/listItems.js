import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import Logout from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { tokenUpdate } from "../../store/actions";

export const MainListItems = () => {
  const navigate = useNavigate();
  const authStore = useSelector((state) => state.auth, shallowEqual);
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {authStore?.data?.user?.type === "admin" ? (
        <ListItemButton onClick={() => navigate("/user_list")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
      ) : null}
      <ListItemButton onClick={() => navigate("/avatar_list")}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(tokenUpdate({ data: null }));
    navigate('/login')
  };
  return (
    <React.Fragment>
      <ListItemButton onClick={logout}>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
};
