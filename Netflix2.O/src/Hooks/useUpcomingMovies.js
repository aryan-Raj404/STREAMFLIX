import { UPCOMING_MOVIE, options } from "../utils/constant.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUpcomingMovies } from "../redux/movieSlice.js";

const useUpcomingMovies = async() =>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(UPCOMING_MOVIE,options);
      dispatch(setUpcomingMovies(res.data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
} 

export default useUpcomingMovies;