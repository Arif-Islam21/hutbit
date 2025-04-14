import { CiPower } from "react-icons/ci";
import { FaCoins, FaWallet } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsLightningChargeFill } from "react-icons/bs";

const BottomNav = () => {
  return (
    <div class="bg-button-bg relative w-full  mx-auto rounded-t-lg pb-4 mt-12 px-4 text-white">
      <button class="absolute cursor-pointer bg-second rounded-full p-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div class="rounded-full bg-gray-500 border-4 border-white shadow-xl w-16 h-16 flex items-center justify-center">
          <CiPower size={28} />
        </div>
      </button>

      <div class="flex justify-around items-center mt-8 pt-4 border-t border-first">
        <button class="flex flex-col cursor-pointer items-center">
          <FaCoins size={28} />
          <span class="text-sm">Profit</span>
        </button>
        <button class="flex flex-col items-center cursor-pointer">
          <FaUserGroup size={28} />
          <span class="text-sm">Group</span>
        </button>
        <button class="flex flex-col items-center cursor-pointer">
          <BsLightningChargeFill size={28} />
          <span class="text-sm">Boost</span>
        </button>
        <button class="flex flex-col items-center cursor-pointer">
          <FaWallet size={28} />
          <span class="text-sm">Wallet</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
