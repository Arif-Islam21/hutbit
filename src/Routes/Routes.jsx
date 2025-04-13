import React from "react";
import App from "../App";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

const HomeRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

export default HomeRoutes;
