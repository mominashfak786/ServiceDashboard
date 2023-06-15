import React from "react";
import {useNavigate } from "react-router-dom";

import "../styles/dashboard.css";
const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <nav class="border bg-white shadow-lg  ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="flex items-center">
            <img
              src="https://www.letusmaintain.com/img/logo.png"
              class="sizeimg"
              alt=""
            />
          </div>
        </div>
      </nav>
      <div className="flex justify-center  items-center mt-3">
      <div className="w-96 bg-white rounded-lg shadow-lg border-2 border-gray-900 dark:shadow-lg p-8 mt-6 ">

    <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
    <form className="space-y-4 ">
      <div>
        <label className="block font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          type="email"
          id="email"
          name="email"
          required=""
        />
      </div>
      <div>
        <label className="block font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          type="password"
          id="password"
          name="password"
          required=""
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
          />
          <label
            className="ml-2 block text-sm text-gray-900"
            htmlFor="rememberMe"
          >
            Remember me
          </label>
        </div>
        <a className="text-blue-600 hover:text-blue-500 text-sm" href="#!">
          Forget Password?
        </a>
      </div>
      <button
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
        onClick={handleSignUpClick}
              type="submit"
      >
        LOGIN
      </button>
    </form>
    <div className="flex items-center justify-center mt-4">
      <span className="text-gray-600">Don't have an account?</span>
      <a className="text-blue-600 hover:text-blue-500 ml-2" href="#!">
        Register
      </a>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;
