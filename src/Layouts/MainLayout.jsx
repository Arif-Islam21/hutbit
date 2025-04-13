import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <h2>Navbar here</h2>
      <div>
        <Outlet />
      </div>
      <h2>Content goes here</h2>
    </div>
  );
};

export default MainLayout;
