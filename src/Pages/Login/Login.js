import React from "react";

const Login = () => {
  return (
    <div class="container py-16">
      <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
        <p class="text-gray-600 mb-6 text-sm">
          Login if you are a returing customer
        </p>
        <form action="">
          <div class="space-y-4">
            <div>
              <label class="text-gray-600 mb-2 block">Email Address</label>
              <input
                type="email"
                class="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="email"
              />
            </div>
            <div>
              <label class="text-gray-600 mb-2 block">Password</label>
              <input
                type="password"
                class="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="password"
              />
            </div>
          </div>
          <div class="flex items-center justify-between mt-6">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                class="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label for="agreement" class="text-gray-300 ml-3 cursor-pointer">
                Remember me
              </label>
            </div>
            <a href="#" class="text-primary">
              Forgot Password?
            </a>
          </div>
          <div class="mt-4">
            <button class="block w-full bg-primary text-white border border-primary py-2 rounded text-center hover:bg-transparent hover:text-primary transition font-roboto font-medium cursor-pointer">
              Login
            </button>
          </div>
        </form>

        <div class="mt-6 flex justify-center relative">
          <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div class="flex mt-4 gap-4">
          <a
            href="/"
            class="w-1/2 py-2 text-center text-white bg-blue-800 rounded font-roboto uppercase font-medium text-sm hover:bg-blue-700"
          >
            Facebook
          </a>
          <a
            href="/"
            class="w-1/2 py-2 text-center text-white bg-yellow-600 rounded font-roboto uppercase font-medium text-sm hover:bg-yellow-500"
          >
            google
          </a>
        </div>

        <p class="capitalize mt-4 text-gray-600 text-center text-sm">
          Don't have an account?
          <a href="/sign-up" class="text-primary">
            register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
