import React from "react";
import { RiMailLine, RiLockLine } from "@remixicon/react";

const Loginpage = () => {
  return (
    <div className="flex justify-center font-mono w-screen h-screen border items-center">
      <form className="shadow-2xl rounded-xl flex flex-col justify-center px-10 py-15 w-100 h-120">
        <h4 className="text-3xl font-bold text-blue-900 mb-1">Login</h4>
        <p className="text-blue-500 text-sm font-medium mb-3">
          Please Login to Your Account
        </p>

        <div className="flex relative">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="w-full border border-blue-400 placeholder:text-blue-400 p-2 m-2 ml-0"
          />
          <RiMailLine className="absolute right-5 top-4 text-sm text-blue-400" />
        </div>
        <div className="flex relative">
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="w-full border border-blue-400 placeholder:text-blue-400 p-2 m-2 ml-0"
          />
          <RiLockLine className="absolute right-5 top-4 text-sm text-blue-400" />
        </div>
        <button className="cursor-pointer rounded-xl text-lg font-bold hover:bg-blue-300 hover:translate-0.5 duration-400 text-white py-2 px-7 mt-4 mb-4 bg-blue-400 font-mono">
          Login
        </button>

        <p className="text-blue-500 ml-2 text-sm font-medium">
          Don't have an Account ?
          <a href="/register" className="text-blue-800">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Loginpage;
