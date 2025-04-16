import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import usdc from "../../assets/pictures/services/usdt.png";
import { FaCopy } from "react-icons/fa";

const RedeemModal = ({ isOpen, setIsOpen }) => {
  const copyData = "0X47F4ghdw2kDY47Vdjdb74t6au3gFSj5";
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 w-full h-full"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 text-white rounded-xl bg-black border-2 border-sixth shadow-md shadow-seventh p-12">
            <DialogTitle className="font-bold text-center text-xl">
              Mining Profit Redeem
            </DialogTitle>
            <hr className="text-blue-400 h-2" />
            <div className="flex items-center justify-around gap-2">
              <img src={usdc} className="size-6" alt="USDC" />
              <input
                type="text"
                defaultValue="1264"
                className="w-20 bg-white text-black text-center rounded-md"
              />
              <p className="text-lg font-semibold">USDT</p>
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text text-xs font-thin text-white">
                  USDT BEP20 Wallet Address
                </span>
              </label>
              <div className="relative border border-gray-300 rounded-lg">
                <input
                  type="text"
                  defaultValue={copyData}
                  className="input w-full bg-transparent text-white placeholder:text-gray-400 pr-10"
                />
                <span className="absolute cursor-copy right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaCopy size={20} />
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-4 justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="btn bg-seventh py-0 border-none text-white font-semibold shadow-none"
              >
                Redeem Now
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default RedeemModal;
