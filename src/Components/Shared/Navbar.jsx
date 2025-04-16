import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profile" },
    { label: "Group", href: "/groups" },
    { label: "Boost", href: "/boost" },
    { label: "Profit", href: "/profit" },
    { label: "Wallet", href: "/wallet" },
    { label: "Support", href: "/support" },
    { label: "About Us", href: "/about-us" },
    { label: "Sign In", href: "/login" },
  ];

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
        <div className="fixed lg:max-w-md mx-auto inset-0 z-50 bg-black/70 p-4 flex flex-col items-start">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl self-end mb-4"
          >
            <HiX />
          </button>
          <ul className="menu text-white w-full space-y-2">
            {links.map((link, index) => (
              <li key={index} className="w-full">
                <a
                  href={link.href}
                  className="block p-2 rounded hover:bg-gray-700 transition duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
