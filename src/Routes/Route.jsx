import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import Contact from "../Pages/Contact/Contact";
import Add_project from "../Pages/ADD_PRODUCT/Add_project";
import Projects from "../Pages/Projects/Projects";
import ProjectDetail from "../Pages/Projects/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://protfoilo-backend.vercel.app/projects"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
        loader: () => fetch("https://protfoilo-backend.vercel.app/projects"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/add_project",
        element: <Add_project></Add_project>,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetail></ProjectDetail>,
        loader: ({params}) => fetch(`https://protfoilo-backend.vercel.app/projects/${params.id}`)
      }
    ],
  },
]);
