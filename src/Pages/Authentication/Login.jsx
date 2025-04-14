import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-first to-second px-4">
      <div className="w-full max-w-sm p-6 bg-transparent rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Log in
        </h2>

        <form>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <div className="border border-gray-300 rounded-lg">
              <input
                type="email"
                placeholder="Enter Your email address"
                className="input w-full bg-transparent text-white placeholder:text-gray-400"
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
            <div className="flex justify-end items-center my-2 ">
              <label className="label justify-end ">
                <Link
                  to="/password-reset"
                  href="#"
                  className="label-text-alt text-blue-400
                  hover:underline ml-auto text-sm"
                >
                  {" "}
                  Forgot password?
                </Link>
              </label>
            </div>
          </div>

          <button className="btn btn-primary w-full mt-2">Log in</button>

          <p className="mt-4 text-center text-white text-sm">
            Don’t have an account?{" "}
            <Link
              to="/sign-up"
              href="#"
              className="text-blue-400 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
