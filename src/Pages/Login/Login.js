import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { userLogin, signInUpWithGoogle, signInWithFacebook } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    userLogin(userEmail, userPassword)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInUpWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login if you are a returing customer
        </p>
        <form onSubmit={handleUserLogin}>
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 mb-2 block">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="email"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Password</label>
              <input
                type="password"
                name="password"
                className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="agreement"
                className="text-gray-300 ml-3 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-primary">
              Forgot Password?
            </a>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full bg-primary text-white border border-primary py-2 rounded text-center hover:bg-transparent hover:text-primary transition font-roboto font-medium cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="flex mt-4 gap-4">
          <button
            onClick={handleFacebookSignIn}
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded font-roboto uppercase font-medium text-sm hover:bg-blue-700"
          >
            Facebook
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-1/2 py-2 text-center text-white bg-yellow-600 rounded font-roboto uppercase font-medium text-sm hover:bg-yellow-500"
          >
            google
          </button>
        </div>
        <p className="capitalize mt-4 text-gray-600 text-center text-sm">
          Don't have an account?
          <a href="/sign-up" className="text-primary">
            register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
