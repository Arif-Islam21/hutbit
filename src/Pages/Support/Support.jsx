import { FiClipboard } from "react-icons/fi";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { TiPhoneOutline } from "react-icons/ti";

import { useEffect, useState } from "react";
import SupportSuccessModal from "../../Components/Modals/SupportSuccessModal";

const Support = () => {
  let [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
    handleCloseWithDelay();
  };
  const handleCloseWithDelay = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between p-4">
        <h2>Raise a Ticket</h2>
        <h3>Status</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-black p-6 rounded-lg shadow-md shadow-seventh border-2 border-sixth"
      >
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
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text text-xl flex items-center  gap-2 font-semibold text-white">
              <span>
                <FiClipboard />
              </span>{" "}
              Problem Details
            </span>
          </label>
          <div className="relative border border-gray-300 rounded-lg">
            <textarea
              type="text"
              placeholder="Describe the issue you're facing in detail..."
              className="textarea w-full bg-transparent font-bold placeholder:text-gray-400 pr-10 text-gray-400"
            />
          </div>
        </div>
        <div className="form-control flex flex-col mb-2">
          <label className="label">
            <span className="label-text text-xl flex items-center  gap-2 font-semibold text-white">
              Attach File<span className="text-sm">(upto 10mb)</span>
            </span>
          </label>
          <input
            type="file"
            className=" max-w-42 px-4 my-2 cursor-grab py-1 rounded-lg border-2 bg-transparent font-bold placeholder:text-gray-400 pr-10 text-gray-400"
          />
        </div>
        <div className="flex items-center justify-center my-4">
          <button className="btn text-white bg-ninth font-bold border-none shadow-none">
            Submit Ticket
          </button>
        </div>
      </form>
      <div className="text-center flex flex-col gap-2 mt-8 items-center justify-center py-4">
        <p className="text-gray-400 font-semibold">You can mail us at</p>
        <p className="font-semibold text-[#4848FF] hover:underline cursor-pointer">
          hutbut@gmail.com
        </p>
        <p className="text-gray-400 font-semibold">
          Our support team will solve your problems within 24 hours
        </p>
      </div>
      <SupportSuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Support;
