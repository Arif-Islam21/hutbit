import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import GroupButtons from "../Buttons/GroupButtons";
import { FaArrowRightLong } from "react-icons/fa6";

const GroupFilterModal = ({ isOpen, setIsOpen }) => {
  const coins = [
    {
      text: "hm",
    },
    {
      text: "mhm",
    },
    {
      text: "ghm",
    },
    {
      text: "thm",
    },
    {
      text: "hhm",
    },
    {
      text: "hhm",
    },
    {
      text: "cmo",
    },
  ];
  const hut = [
    {
      text: "hut 1",
    },
    {
      text: "hut 2",
    },
    {
      text: "hut 3",
    },
    {
      text: "hut 4",
    },
    {
      text: "hut 5",
    },
    {
      text: "hut 6",
    },
    {
      arrow: (
        <button onClick={() => console.log("Clicked arrow")}>
          <FaArrowRightLong size={30} className="cursor-pointer" />
        </button>
      ),
    },
  ];
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* Backdrop with black/50 opacity */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 text-white rounded-xl bg-black border-2 border-sixth shadow-md shadow-seventh px-12 py-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <h2 className="text-green-600 font-bold">Active</h2>
              <GroupButtons onClick={() => console.log("Active clicked")} />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-red-600 font-bold">Inactive</h2>
              <GroupButtons onClick={() => console.log("Inactive clicked")} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-end justify-center gap-2 flex-col">
              {coins.map((coin, index) => {
                const handleClick = () => {
                  console.log("Clicked item:", coin.text);
                };
                return (
                  <div className="flex items-center gap-2" key={index}>
                    <h2 className="uppercase font-bold">{coin.text}</h2>
                    <GroupButtons onClick={() => handleClick()} />
                  </div>
                );
              })}
            </div>
            <div className="flex items-end justify-center gap-2 flex-col">
              {hut.map((coin, index) => {
                const handleClick = () => {
                  console.log("Clicked item:", coin.text);
                };
                return (
                  <div className="flex items-center gap-2" key={index}>
                    <h2 className="uppercase font-bold">{coin.text}</h2>
                    {coin.arrow && coin.arrow}
                    <div className={coin.arrow ? "hidden" : ""}>
                      <GroupButtons onClick={() => handleClick()} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default GroupFilterModal;
