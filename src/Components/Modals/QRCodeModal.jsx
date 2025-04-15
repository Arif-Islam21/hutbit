import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FaCopy } from "react-icons/fa";
import QRCode from "react-qr-code";

const QRCodeModal = ({ isOpen, setIsOpen }) => {
  const qrData = "0X47F4ghdw2kDY47Vdjdb74t6au3gFSj5";
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* Backdrop with black/50 opacity */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 text-white rounded-xl bg-black border-2 border-sixth shadow-md shadow-seventh p-12">
          <DialogTitle className="font-bold text-xl text-center">
            Details
          </DialogTitle>
          <hr className="text-blue-400 h-2" />

          {/* QR Code Container */}
          <div className="flex justify-center p-4 bg-white max-w-fit mx-auto rounded-md">
            <QRCode
              value={qrData}
              size={112} // Adjust size as needed
              level="H" // Error correction level (L, M, Q, H)
              bgColor="#ffffff" // White background
              fgColor="#000000" // Black foreground
            />
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
                defaultValue={qrData}
                className="input w-full bg-transparent text-white placeholder:text-gray-400 pr-10"
              />
              <span className="absolute cursor-copy right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaCopy size={20} />
              </span>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default QRCodeModal;
