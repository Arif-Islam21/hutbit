import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { TiPhoneOutline } from "react-icons/ti";

const GroupInfoModal = ({ isOpen, setIsOpen }) => {
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
            INFO
          </DialogTitle>

          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-xl font-semibold text-white">
                ID
              </span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="text"
                defaultValue="234567"
                className="input w-full bg-transparent font-bold placeholder:text-gray-400 pr-10 text-gray-400"
              />
            </div>
          </div>
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-xl flex items-center  gap-2 font-semibold text-white">
                <span>
                  <IoPersonOutline />
                </span>{" "}
                Name
              </span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="text"
                defaultValue="name"
                className="input w-full bg-transparent font-bold placeholder:text-gray-400 pr-10 text-gray-400"
              />
            </div>
          </div>
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-xl flex items-center  gap-2 font-semibold text-white">
                <span>
                  <IoMailOutline />
                </span>{" "}
                Email
              </span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="text"
                defaultValue="email"
                className="input w-full bg-transparent font-bold placeholder:text-gray-400 pr-10 text-gray-400"
              />
            </div>
          </div>
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-xl flex items-center  gap-2 font-semibold text-white">
                <span>
                  <TiPhoneOutline />
                </span>{" "}
                Phone Number
              </span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="text"
                defaultValue="+91 936564749"
                className="input w-full bg-transparent font-bold placeholder:text-gray-400 pr-10 text-gray-400"
              />
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default GroupInfoModal;
