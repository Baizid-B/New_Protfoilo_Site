import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import Contact from "../Pages/Contact/Contact";
import Add_product from "../Pages/ADD_PRODUCT/Add_project";
import Add_project from "../Pages/ADD_PRODUCT/Add_project";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/projects')
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:'/Projects',
        element:<Projects></Projects>,
        loader: () => fetch('http://localhost:5000/projects')
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