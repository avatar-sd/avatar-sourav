import { createBrowserRouter } from "react-router-dom";
import Login from "./views/auth/login";
import Register from "./views/auth/register";
import ForgotPassword from "./views/auth/forgotPassword";
import Dashboard from "./views/dashboard";
import SaveAvatar from "./views/saveAvatar";
import UserList from "./views/userList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [],
  },
  {
    path: "/save_avatar",
    element: <SaveAvatar />,
    children: [],
  },
  {
    path: "/user_list",
    element: <UserList />,
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
    element: <hi>hii</hi>,
  },
]);

export default Router;
