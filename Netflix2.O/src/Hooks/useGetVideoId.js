import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { options } from "../utils/constant.js";
import { setTrailer } from "../redux/movieSlice.js";

const useGetVideoId = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        // Check if response data exists
        if (res?.data?.results) {
          const trailer = res.data.results.filter((video) => video.type === "Trailer");
          // Dispatch the first trailer if exists, otherwise fallback to first result
          dispatch(
            setTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0])
          );
        }
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    };

    if (movieId) {
      getVideo();
    }
  }, [movieId, dispatch]);
};

export default useGetVideoId;