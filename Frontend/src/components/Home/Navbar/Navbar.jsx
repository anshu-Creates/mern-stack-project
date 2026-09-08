import Logo from './Logo'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../../../api'


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      console.log("Logging out...");
      await apiRequest("/logout", { method: "POST" });
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex m-5 py-4 px-10 fixed top-0 w-[97%] rounded-md bg-blue-100 justify-between align-middle'>
        <Logo/>
        <button className='cursor-pointer rounded-xl text-lg font-bold hover:bg-blue-300 hover:translate-0.5 duration-400 text-white py-2 px-7 bg-blue-400 font-mono' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Navbar