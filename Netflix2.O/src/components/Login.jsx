import { useState } from "react";
import axios from "axios";
import { API_END_POINT } from "./../utils/constant.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser , setIsLoading } from "../redux/userSlice.js";
import {useSelector} from "react-redux";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = isLogin ? { email, password } : { username, email, password };



    try {
      dispatch(setIsLoading(true))
      const url = `${API_END_POINT}${isLogin ? "login" : "register"}`;
      const res = await axios.post(url, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // ✅ REQUIRED to send/receive cookies
      });
      
      if (res.data.success) {
        toast.success(res.data.message);
      }
      if(isLogin){
        dispatch(setUser(res.data.user));
        navigate("/browse");
      }
      else{
        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
    finally{
      dispatch(setIsLoading(false));
    }

    // Clear input fields after submission
    setEmail("");
    setUserName("");
    setPassword("");
  };

  return (
    <>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="banner"
        />
      </div>

      <form
        onSubmit={submitHandler}
        className="w-md mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-black opacity-90 text-white -translate-y-1/2 p-6 rounded-lg shadow-md"
      >
        <h1 className="text-3xl text-center mb-2">
          {isLogin ? "Login" : "Signup"}
        </h1>

        {!isLogin && (
          <>
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              value={username}
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
              placeholder="Enter your username"
            />
          </>
        )}

        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          value={email}
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          placeholder="Email address"
        />

        <label
          htmlFor="password"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          placeholder="Enter your password"
        />

        <div className="text-center mt-2">
          <button
            type="submit"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            {isLoading ? "loading..." : isLogin ? "Login" : "Signup"}
          </button>
        </div>

        <p className="mt-2 text-md text-center text-gray-500 dark:text-gray-400">
          {isLogin ? "New to Netflix? " : "Already have an account? "}
          <span onClick={loginHandler} className="text-white cursor-pointer">
            {isLogin ? "Signup here" : "Login here"}
          </span>
          .
        </p>
      </form>
    </>
  );
};

export default Login;
