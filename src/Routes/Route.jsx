import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import Contact from "../Pages/Contact/Contact";
import Add_product from "../Pages/ADD_PRODUCT/Add_project";
import Add_project from "../Pages/ADD_PRODUCT/Add_project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/add_project",
        element:<Add_project></Add_project>
      },
    ]
  },
]);