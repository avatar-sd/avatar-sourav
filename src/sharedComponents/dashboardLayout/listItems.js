import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AddLogo from "../../assets/images/add.png";
import Logout from "../../assets/images/logout.png";
import peopleLogo from "../../assets/images/Menu-3.png";
import manuLogo from "../../assets/images/Menu-1.png";
import bannerLogo from "../../assets/images/Menu-2.png";
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
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/avatar_list")}>
        <ListItemIcon>
          <img src={manuLogo} style={{ width: "50px", marginLeft: "-10px" }} />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <img
            src={bannerLogo}
            style={{ width: "50px", marginLeft: "-10px" }}
          />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {authStore?.data?.user?.type === "admin" ? (
        <ListItemButton onClick={() => navigate("/user_list")}>
          <ListItemIcon>
            <img
              src={peopleLogo}
              style={{ width: "50px", marginLeft: "-10px" }}
            />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
      ) : null}
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(tokenUpdate({ data: null }));
    navigate("/login");
  };
  return (
    <React.Fragment>
      <ListItemButton onClick={()=> navigate('/upload')}>
        <ListItemIcon>
          <img src={AddLogo} style={{ width: "30px", marginLeft: "-3px" }} />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
      <ListItemButton onClick={logout}>
        <ListItemIcon>
          <img src={Logout} style={{ width: "30px" }} />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
};
