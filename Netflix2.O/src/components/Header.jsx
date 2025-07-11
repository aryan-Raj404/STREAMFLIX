import { FaRegUserCircle } from "react-icons/fa";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice.js";
import axios from "axios";
import { API_END_POINT } from "./../utils/constant.js";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice.js";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movies.toggle);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async() => {
    try {
      const res = await axios.get(`${API_END_POINT}logout`);
      if(res.data.success){
        toast.success(res.data.message)  
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      }else{
        toast.error("An error occurred while logging out. Please try again.");
      }
    }
  }

  const toggleHandler = ()=>{
    dispatch(setToggle());
  }

  return (
    <>
    <div className='absolute z-10 w-[100vw] flex items-center justify-between bg-gradient-to-b from-black px-6 py-4'>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="NETFLIX" />
      {
        (user && <div className='flex items-center text-white'>
        <FaRegUserCircle size="24px" /> &nbsp; <h1 className='text-lg font-medium'>{user.username}</h1>
        <div className='ml-4'>
          <button onClick={logoutHandler} className='bg-red-600 text-white px-3 py-2 cursor-pointer'>Logout</button>
          <button onClick={toggleHandler} className='bg-red-600 text-white px-3 py-2 ml-2'>{toggle ? "Home" : "Search Movies"}</button>
        </div>
      </div>)
}
    </div>
    </>
  )
}

export default Header