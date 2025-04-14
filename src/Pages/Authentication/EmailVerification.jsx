import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const EmailVerification = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-first to-second px-4">
      <div className="w-full max-w-sm p-6 bg-transparent rounded-lg">
        <form>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="email"
                placeholder="Enter Your email address"
                className="input w-full bg-transparent text-white placeholder:text-gray-400 pr-10"
              />
              <Link
                to="/email-verify"
                className="absolute right-3 top-1/2 text-blue-400 transform -translate-y-1/2 text-sm cursor-pointer"
              >
                Get Code
              </Link>
            </div>
          </div>

          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-white">Code</span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="number"
                placeholder="Enter your verification code"
                className="input w-full bg-transparent text-white placeholder:text-gray-400 pr-10"
              />
            </div>
            <div className="flex justify-end items-center my-2 ">
              <label className="label justify-end ">
                <a
                  href="#"
                  className="label-text-alt text-blue-400 hover:underline ml-auto text-sm"
                >
                  Didn't get Code?
                </a>
              </label>
            </div>
          </div>

          <button className="btn btn-primary w-full mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
