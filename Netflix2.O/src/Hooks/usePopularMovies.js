import { POPULAR_MOVIE, options } from "../utils/constant.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPopularMovies } from "../redux/movieSlice.js";

const usePopularMovies = async() =>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(POPULAR_MOVIE,options);
      dispatch(setPopularMovies(res.data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
} 

export default usePopularMovies;