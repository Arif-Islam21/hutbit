import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import usdc from "../../assets/pictures/services/usdc.png";
import { useState } from "react";
import QRCodeModal from "./QRCodeModal";

const RentModal = ({ isOpen, setIsOpen }) => {
  const [isQrOpen, setIsQrOpen] = useState(false);

  const handleConnectWallet = () => {
    setIsOpen(false);
    setIsQrOpen(true);
  };
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
              Rent Now
            </DialogTitle>
            <hr className="text-blue-400 h-2" />
            <div className="flex items-center gap-2">
              <img src={usdc} className="size-6" alt="USDC" />
              <input
                type="text"
                defaultValue="1000"
                className="w-20 bg-white text-black text-center rounded-md"
              />
              <p className="text-lg font-semibold">USDT</p>
            </div>
            <div>
              <legend className="text-sm text-white">Expected Earning</legend>
              <div className="flex items-center gap-2">
                <fieldset className="fieldset">
                  <input
                    type="text"
                    className="bg-black text-white border border-white placeholder:text-white py-1 text-center rounded-md"
                    placeholder="7-10"
                  />
                </fieldset>
                <h4>USDT/Day</h4>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="btn bg-[#4C7FDD] border-none text-white font-semibold shadow-none"
                onClick={handleConnectWallet}
              >
                Connect Wallet
              </button>
              <button
                className="btn bg-[#4C7FDD] border-none text-white font-semibold shadow-none"
                onClick={handleConnectWallet}
              >
                USDT
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <QRCodeModal isOpen={isQrOpen} setIsOpen={setIsQrOpen} />
    </>
  );
};

export default RentModal;
