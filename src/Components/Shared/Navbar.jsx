import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-start"></div>

      <div className="navbar-center">
        <a className="text-xl">HUTBIT</a>
      </div>

      <div className="navbar-end">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="btn btn-ghost bg-first"
        >
          <HiMenuAlt4 className="text-3xl" />
        </button>
      </div>

      {/* Full-width Dropdown */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 p-4 flex flex-col items-start">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl self-end mb-4"
          >
            <HiX />
          </button>
          <ul className="menu text-white w-full space-y-2">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Group</a>
            </li>
            <li>
              <a>Boost</a>
            </li>
            <li>
              <a>Profit</a>
            </li>
            <li>
              <a>Wallet</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Sign Out</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
