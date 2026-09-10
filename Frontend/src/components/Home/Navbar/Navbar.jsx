import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../../api";
import { useState } from "react";

const Navbar = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    setIsSubmitting(true);
    try {
      console.log("Logging out...");
      await apiRequest("/logout", { method: "POST" });
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex m-5 py-4 px-10 fixed top-0 w-[97%] rounded-md bg-blue-100 justify-between align-middle">
      <Logo />
      <button
        type="submit"
        onClick={handleLogout}
        disabled={isSubmitting}
        className="cursor-pointer rounded-xl text-lg font-bold hover:bg-blue-300 hover:translate-0.5 duration-400 text-white py-2 px-7 mt-4 mb-4 bg-blue-400 font-mono"
      >
        {isSubmitting ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
};

export default Navbar;
