import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiUserLine, RiMailLine, RiLockLine } from "@remixicon/react";
import { apiRequest } from "../api";

const Registerpage = () => {
  const navigate = useNavigate();
  const [names, setnames] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      names: names,
      email: email,
      password: password,
    };
    setError("");
    setIsSubmitting(true);

    try {
      await apiRequest("/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setnames("");
      setemail("");
      setpassword("");
      navigate("/");
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
        <h4 className="text-3xl font-bold text-blue-900 mb-1">Register</h4>
        <p className="text-blue-500 text-sm font-medium mb-3">
          Please Register Your Account
        </p>
        <div className="flex relative">
          <input
            type="text"
            placeholder="Name"
            value={names}
            onChange={(e) => setnames(e.target.value)}
            className="w-full border border-blue-400 placeholder:text-blue-400 p-2 m-2 ml-0"
            required
          />
          <RiUserLine className="absolute right-5 top-4 text-sm text-blue-400" />
        </div>
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
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
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
          {isSubmitting ? "Registering..." : "Register"}
        </button>
        {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}

        <p className="text-blue-500 ml-2 text-sm font-medium">
          Already have an Account ?
          <a href="/" className="text-blue-800">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Registerpage;
