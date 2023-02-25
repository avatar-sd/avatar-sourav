import { createBrowserRouter } from "react-router-dom";
import Login from "./views/auth/login";
import Register from "./views/auth/register";
import ForgotPassword from "./views/auth/forgotPassword";
import Dashboard from "./views/dashboard";
import SaveAvatar from "./views/saveAvatar";
import UserList from "./views/userList";
import Preview from "./views/preview";
import UploadAvatar from "./views/uploadAvatar";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [],
  },
  {
    path: "/avatar_list",
    element: <SaveAvatar />,
    children: [],
  },
  {
    path: "/user_list",
    element: <UserList />,
    children: [],
  },
  {
    path: "/preview",
    element: <Preview />,
    children: [],
  },
  {
    path: "/upload",
    element: <UploadAvatar />,
    children: [],
  },
  {
    path: "/register",
    element: <Register />,
    children: [],
  },
  {
    path: "/forgot_password",
    element: <ForgotPassword />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "*",
    element: <h2 style={{ textAlign: "center", width: '100%' }}>Page Not Found</h2>,
  },
]);

export default Router;
