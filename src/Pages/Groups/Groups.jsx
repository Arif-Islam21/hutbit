import { IoPerson } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import GroupInfoModal from "../../Components/Modals/GroupInfoModal";
import GroupFilterModal from "../../Components/Modals/GroupFilterModal";

const Groups = () => {
  const btnData = [
    {
      text: "hm",
      number: 256,
    },
    {
      text: "mhm",
      number: 128,
    },
    {
      text: "ghm",
      number: 64,
    },
    {
      text: "thm",
      number: 32,
    },
    {
      text: "hhm",
      number: 16,
    },
    {
      text: "shm",
      number: 8,
    },
    {
      text: "cmo",
      number: 4,
    },
  ];
  const hutData = [
    {
      text: "hut 1",
      number: 9456,
    },
    {
      text: "hut 2",
      number: 9456,
    },
    {
      text: "hut 3",
      number: 9456,
    },
    {
      text: "hut 4",
      number: 9456,
    },
    {
      text: "hut 5",
      number: 9456,
    },
    {
      text: "hut 6",
      number: 9456,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="">
      <div className="mt-8 mb-3 flex flex-wrap items-center justify-around space-y-2">
        <button className="btn bg-black/70 text-white border-none shadow-none  py-3">
          My Referrer
        </button>
        <button className="btn bg-black/70 text-white border-none shadow-none  py-3">
          Referral Code
        </button>
        <button className="btn bg-black/70 text-white border-none shadow-none  py-3">
          Referral Link
        </button>
      </div>
      <div className="my-6 flex mx-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Total Miners</h2>
          <h2 className="text-xl font-semibold">5250</h2>
        </div>
        <button onClick={() => setIsOpen(true)} className="cursor-pointer">
          <IoPerson size={20} />
        </button>
      </div>
      <div className="my-6 flex mx-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Total Business</h2>
          <h2 className="text-xl font-semibold">$4,56,789</h2>
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="cursor-pointer"
        >
          <CiFilter size={26} />
        </button>
      </div>
      <div className="my-4 border-t-4 border-b-4 py-8 flex justify-around flex-wrap border-gray-500">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          {btnData.map((item, index) => {
            return (
              <div className="max-w-fit" key={index}>
                <h5 className="uppercase text-center">{item.text}</h5>
                <button className="cursor-pointer font-bold px-2 py-1 rounded-lg bg-button-bg-hover shadow-md shadow-seventh">
                  {item.number}
                </button>
                {item.break && <br />}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 justify-around items-center">
          {hutData.map((item, index) => {
            return (
              <div className="max-w-fit" key={index}>
                <h5 className="uppercase text-center">{item.text}</h5>
                <button className="cursor-pointer font-bold px-2 py-1 rounded-lg bg-button-bg-hover shadow-md shadow-seventh">
                  {item.number}
                </button>
                {item.break && <br />}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-4 my-6 py-3 mx-3 flex items-center justify-around bg-gradient-to-b from-[#64A0FA] to-[#1B4262] rounded-4xl">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-semibold">H1</h1>
          <p className="text-sm font-light text-[#20C52B]">Active</p>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-xl font-semibold">NOAH</h1>
          <p className="text-xs text-white">ID-786139</p>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-semibold">$1,05,400</h1>
        </div>
        <div className="flex flex-col cursor-pointer text-center">
          <h1 className="text-4xl font-semibold">
            <MdKeyboardArrowDown />
          </h1>
        </div>
      </div>
      <GroupInfoModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <GroupFilterModal isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />
    </div>
  );
};

export default Groups;
