import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Loading from "../Components/Loading";
import React, { lazy, Suspense } from "react";


const Home = lazy(() => import("../Pages/Home/Home"));
const About = lazy(() => import("../Pages/About/About"));
const Error = lazy(() => import("../Pages/Error/Error"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Add_project = lazy(() => import("../Pages/ADD_PRODUCT/Add_project"));
const Projects = lazy(() => import("../Pages/Projects/Projects"));
const ProjectDetail = lazy(() => import("../Pages/Projects/ProjectDetail"));


const withLoading = (Component) => {
  return (
    <Suspense fallback={<Loading />}>
      {React.createElement(Component)}
    </Suspense>
  );
};


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: withLoading(Home),
        loader: () => fetch("https://protfoilo-backend.vercel.app/projects"),
      },
      {
        path: "/about",
        element: withLoading(About),
      },
      {
        path: "/contact",
        element: withLoading(Contact),
      },
      {
        path: "/add_project",
        element: withLoading(Add_project),
      },
      {
        path: "/projects",
        element: withLoading(Projects),
        loader: () => fetch("https://protfoilo-backend.vercel.app/projects"),
      },
      {
        path: "/projects/:id",
        element: withLoading(ProjectDetail),
        loader: ({params}) => fetch(`https://protfoilo-backend.vercel.app/projects/${params.id}`)
      }
    ],
  },
]);
