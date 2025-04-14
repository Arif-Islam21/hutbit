import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Loading from "../Components/Shared/Loading";

const HomeRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
]);

export default HomeRoutes;
