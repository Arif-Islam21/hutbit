import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Loading from "../Components/Shared/Loading";
import ErrorPage from "../Components/Shared/ErrorPage";

// Lazy load your components for better performance
const Home = lazy(() => import("../Pages/Home/Home"));
const Login = lazy(() => import("../Pages/Authentication/Login"));
const SignUp = lazy(() => import("../Pages/Authentication/SignUp"));
const EmailVerification = lazy(() =>
  import("../Pages/Authentication/EmailVerification")
);
const PasswordReset = lazy(() =>
  import("../Pages/Authentication/PasswordReset")
);
const AboutUs = lazy(() => import("../Pages/AboutUs/AboutUs"));
const Boost = lazy(() => import("../Pages/Boost/Boost"));
const Profile = lazy(() => import("../Pages/Profile/Profile"));
const Profit = lazy(() => import("../Pages/Profite/Profit"));
const Wallet = lazy(() => import("../Pages/Wallet/Wallet"));
const Groups = lazy(() => import("../Pages/Groups/Groups"));
const Support = lazy(() => import("../Pages/Support/Support"));

const HomeRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, // Add error boundary
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "boost",
        element: (
          <Suspense fallback={<Loading />}>
            <Boost />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "profit",
        element: (
          <Suspense fallback={<Loading />}>
            <Profit />
          </Suspense>
        ),
      },
      {
        path: "wallet",
        element: (
          <Suspense fallback={<Loading />}>
            <Wallet />
          </Suspense>
        ),
      },
      {
        path: "groups",
        element: (
          <Suspense fallback={<Loading />}>
            <Groups />
          </Suspense>
        ),
      },
      {
        path: "support",
        element: (
          <Suspense fallback={<Loading />}>
            <Support />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/email-verify",
    element: (
      <Suspense fallback={<Loading />}>
        <EmailVerification />
      </Suspense>
    ),
  },
  {
    path: "/password-reset",
    element: (
      <Suspense fallback={<Loading />}>
        <PasswordReset />
      </Suspense>
    ),
  },
]);

export default HomeRoutes;
