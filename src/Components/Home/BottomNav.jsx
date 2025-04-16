import { CiPower } from "react-icons/ci";
import { FaCoins, FaWallet } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsLightningChargeFill } from "react-icons/bs";
import { Link } from "react-router";
import { useState } from "react";

const BottomNav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-button-bg relative w-full  mx-auto rounded-t-lg pb-4 mt-12 px-4 text-white">
      <button
        onClick={() => setIsActive(!isActive)}
        className="absolute cursor-pointer bg-second rounded-full p-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div
          className={`rounded-full ${
            isActive ? "bg-button-bg " : "bg-gray-500 "
          } border shadow-xl w-16 border-white h-16 flex items-center justify-center`}
        >
          <CiPower size={28} />
        </div>
      </button>

      <div className="flex justify-around items-center mt-8 pt-4 border-t border-first">
        <Link
          to="/profit"
          className="flex flex-col cursor-pointer items-center"
        >
          <FaCoins size={28} />
          <span className="text-sm">Profit</span>
        </Link>
        <button className="flex flex-col items-center cursor-pointer">
          <FaUserGroup size={28} />
          <span className="text-sm">Group</span>
        </button>
        <Link to="/boost" className="flex flex-col items-center cursor-pointer">
          <BsLightningChargeFill size={28} />
          <span className="text-sm">Boost</span>
        </Link>
        <Link
          to="/wallet"
          className="flex flex-col items-center cursor-pointer"
        >
          <FaWallet size={28} />
          <span className="text-sm">Wallet</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
