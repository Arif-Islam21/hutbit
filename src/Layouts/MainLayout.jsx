import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="lg:max-w-md mx-auto bg-gradient-to-b from-first to-second text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto min-h-[calc(100vh-55px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
