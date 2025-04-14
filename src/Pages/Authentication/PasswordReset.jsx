import { FaEye } from "react-icons/fa";

const PasswordReset = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-first to-second px-4">
      <div className="w-full max-w-sm p-6 bg-transparent rounded-lg">
        <form>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">New Password</span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="password"
                placeholder="Enter your password"
                className="input w-full bg-transparent text-white placeholder:text-gray-400 pr-10"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaEye size={20} />
              </span>
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Confirm Password</span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="password"
                placeholder="Enter your password"
                className="input w-full bg-transparent text-white placeholder:text-gray-400 pr-10"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaEye size={20} />
              </span>
            </div>
          </div>

          <button className="btn btn-primary w-full mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
