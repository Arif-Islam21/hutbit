import Footer from "../../Components/Shared/Footer";
import ProfileAvater from "./ProfileAvater";
import { FaPen, FaRegCopy } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      <ProfileAvater />
      <form className="mx-8 my-12">
        <div className="form-control mb-4">
          <div className="border border-gray-300 rounded-xl">
            <input
              type="text"
              defaultValue="ID- 453927"
              className="input w-full bg-transparent text-gray-300 font-bold placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="form-control mb-4">
          <div className="border border-gray-300 rounded-xl">
            <input
              type="tel"
              defaultValue="+91 9685425876"
              className="input w-full bg-transparent text-gray-300 font-bold placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="form-control mb-2">
          <label className="label mb-1">
            <span className="label-text text-white">Referral Code</span>
          </label>
          <div className="relative border border-gray-300 rounded-lg">
            <input
              type="text"
              defaultValue="NDASWD4542"
              className="input w-full bg-transparent text-gray-300 font-semibold placeholder:text-gray-400 pr-10"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaRegCopy size={20} />
            </span>
          </div>
        </div>
        <div className="form-control mb-2">
          <label className="label mb-1">
            <span className="label-text text-white">Referral Link</span>
          </label>
          <div className="relative border border-gray-300 rounded-lg">
            <input
              type="text"
              defaultValue="http/bdgasawsxshhcsccxxasxds.in"
              className="input w-full bg-transparent text-gray-300 font-semibold placeholder:text-gray-400 pr-10"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaRegCopy size={20} />
            </span>
          </div>
        </div>
        <div className="form-control mb-2">
          <label className="label mb-1">
            <span className="label-text text-white textarea-md">
              Withdrawal address (USDT BEP20)
            </span>
          </label>
          <div className="relative border border-gray-300 rounded-lg">
            <input
              type="text"
              defaultValue="0XSDKHSCIASHJ734ENCAKL9"
              className="input w-full bg-transparent text-gray-300 font-semibold placeholder:text-gray-400 pr-10"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaPen size={16} />
            </span>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Profile;
