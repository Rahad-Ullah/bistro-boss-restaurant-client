import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Error404 from "../layouts/Error404";
import Menu from "../pages/Menu/Menu/Menu";

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
            path: '/contact-us',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        }
      ]
    },
  ]);

  export default router;