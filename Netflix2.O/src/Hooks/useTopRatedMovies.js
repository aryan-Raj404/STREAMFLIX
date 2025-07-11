import { TOP_RATED_MOVIE, options } from "../utils/constant.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTopRatedMovies } from "../redux/movieSlice.js";

const useTopRatedMovies = async() =>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(TOP_RATED_MOVIE,options);
      dispatch(setTopRatedMovies(res.data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
} 

export default useTopRatedMovies;