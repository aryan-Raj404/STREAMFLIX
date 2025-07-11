import { NOW_PLAYING_MOVIE, options } from "../utils/constant.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../redux/movieSlice.js";

const useGetNowMovies = async() =>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(NOW_PLAYING_MOVIE,options);
      dispatch(setNowPlayingMovies(res.data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
} 

export default useGetNowMovies;