import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-b from-first to-second text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto min-h-[calc(100vh-55px)]">
        <Outlet />
      </div>
      <h2>Content goes here</h2>
    </div>
  );
};

export default MainLayout;
