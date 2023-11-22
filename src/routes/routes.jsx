import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Error404 from "../layouts/Error404";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import Auth from "../layouts/Auth";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error404></Error404>,
      children: [
        {
          index: true,
          element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <PrivateRoute><OrderFood></OrderFood></PrivateRoute>
        },
      ]
    },
    {
      path: '/auth',
      element: <Auth></Auth>,
      children: [
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'sign-up',
          element: <SignUp></SignUp>
        }
      ]
    }
  ]);

  export default router;