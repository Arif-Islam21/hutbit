import { FaEye } from "react-icons/fa";
import indiaFlag from "../../assets/pictures/indiaFlag.jpg";
import { IoIosArrowDown } from "react-icons/io";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-first to-second px-4">
      <div className="w-full max-w-sm p-6 bg-transparent rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Sign Up
        </h2>

        <form>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <div className="border border-gray-300 rounded-lg">
              <input
                type="text"
                placeholder=""
                className="input w-full bg-transparent text-white placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <input
                type="email"
                className="input w-full bg-transparent text-white placeholder:text-gray-400 pr-10"
              />
              <span className="absolute right-3 top-1/2 text-blue-400 transform -translate-y-1/2 text-sm cursor-pointer">
                Get Code
              </span>
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">
                Email Verification Code
              </span>
            </label>
            <div className="border border-gray-300 rounded-lg">
              <input
                type="email"
                placeholder=""
                className="input w-full bg-transparent text-white placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Phone Number</span>
            </label>
            <div className="relative border border-gray-300 rounded-lg">
              <span className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-white">
                <div className="flex items-center gap-2">
                  <img
                    src={indiaFlag}
                    alt="flag"
                    className="size-5 rounded-lg"
                  />
                  <IoIosArrowDown size={20} className="text-white" />
                  <h3>+91</h3>
                </div>
              </span>
              <input
                type="number"
                className="input w-full bg-transparent text-white placeholder:text-gray-400 pr-10"
              />
            </div>
          </div>

          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-white">Password</span>
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
          <div className="form-control mb-2">
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
          <div>
            <fieldset className="fieldset  rounded-box w-64">
              <label className="fieldset-label text-white font-bold">
                <input
                  type="checkbox"
                  className="checkbox border-2 border-gray-300 mr-2"
                />
                Terms & conditions & Privacy Policy
              </label>
            </fieldset>
          </div>

          <button className="btn btn-primary w-full mt-2">Continue</button>

          <p className="mt-4 text-center text-white text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
