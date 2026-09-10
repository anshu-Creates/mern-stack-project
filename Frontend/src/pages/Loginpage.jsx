import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiMailLine, RiLockLine } from "@remixicon/react";
import API_URL from "../api";

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    setError("");
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const Backdata = await response.json();
      if (!response.ok) {
        throw new Error(Backdata.message || "Request failed");
      }
      setemail("");
      setpassword("");
      navigate("/home");
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center font-mono w-screen h-screen border items-center">
      <form
        className="shadow-2xl rounded-xl flex flex-col justify-center px-10 py-15 w-100 h-120"
        onSubmit={submitHandler}
      >
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
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full border border-blue-400 placeholder:text-blue-400 p-2 m-2 ml-0"
            required
          />
          <RiMailLine className="absolute right-5 top-4 text-sm text-blue-400" />
        </div>
        <div className="flex relative">
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full border border-blue-400 placeholder:text-blue-400 p-2 m-2 ml-0"
            minLength={8}
            required
          />
          <RiLockLine className="absolute right-5 top-4 text-sm text-blue-400" />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer rounded-xl text-lg font-bold hover:bg-blue-300 hover:translate-0.5 duration-400 text-white py-2 px-7 mt-4 mb-4 bg-blue-400 font-mono"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        {error && (
          <p className="text-red-600 text-sm" role="alert">
            {error}
          </p>
        )}

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
