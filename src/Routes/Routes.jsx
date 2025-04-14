import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Loading from "../Components/Shared/Loading";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import EmailVerification from "../Pages/Authentication/EmailVerification";
import PasswordReset from "../Pages/Authentication/PasswordReset";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Boost from "../Pages/Boost/Boost";

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
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/boost",
        element: <Boost />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/email-verify",
    element: <EmailVerification />,
  },
  {
    path: "/password-reset",
    element: <PasswordReset />,
  },
]);

export default HomeRoutes;
