import { IoPerson } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

const Groups = () => {
  return (
    <div className="">
      <div className="mt-8 mb-3 flex items-center justify-between">
        <button className="btn bg-black/70 text-white border-none shadow-none px-6 py-4">
          My Referrer
        </button>
        <button className="btn bg-black/70 text-white border-none shadow-none px-6 py-4">
          Referral Code
        </button>
        <button className="btn bg-black/70 text-white border-none shadow-none px-6 py-4">
          Referral Link
        </button>
      </div>
      <div className="my-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Total Miners</h2>
          <h2 className="text-xl font-semibold">5250</h2>
        </div>
        <button className="cursor-pointer">
          <IoPerson size={20} />
        </button>
      </div>
      <div className="my-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Total Business</h2>
          <h2 className="text-xl font-semibold">$4,56,789</h2>
        </div>
        <button className="cursor-pointer">
          <CiFilter size={26} />
        </button>
      </div>
      <div className="my-4 border-t-4 border-b-4 border-gray-500 py-2">
        <div className="max-w-fit p-3 ">
          <h5 className="uppercase text-center">hm</h5>
          <button className="cursor-pointer font-bold px-4 py-1 rounded-lg bg-button-bg-hover shadow-md shadow-seventh">
            256
          </button>
        </div>
      </div>
    </div>
  );
};

export default Groups;
