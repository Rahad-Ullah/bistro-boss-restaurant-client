import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Error404 from "../layouts/Error404";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import Auth from "../layouts/Auth";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/Cart/AllUsers/AllUsers";

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
          element: <OrderFood></OrderFood>
        },
        {
          path: 'contact-us',
          element: <></>
        }
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
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'user-home',
          element: <></>
        },
        {
          path: 'cart',
          element: <PrivateRoute><Cart></Cart></PrivateRoute>
        },
        {
          path: 'payment-history',
          element: <></>
        },
        {
          path: 'reservation',
          element: <></>
        },
        {
          path: 'review',
          element: <></>
        },
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        },
      ]
    },
  ]);

  export default router;