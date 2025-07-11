import { useSelector } from "react-redux";
import useGetVideoId from "../Hooks/useGetVideoId.js";

const VideoBackground = ({ movieId , bool=false }) => {
  const trailer = useSelector((store) => store.movies.trailer);

  // Call the hook to fetch trailer data
  useGetVideoId(movieId);

  // Only render iframe if trailer exists and has a key
  // if (!trailer || !trailer.key) {
  //   return <div>Loading trailer...</div>; // or null
  // }

  return (
    <div className="w-vw">
      <iframe
        className={`${bool ?" w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&${bool ? "controls=1" : "controls=0"}&loop=1&playlist=${trailer?.key}`}
        frameBorder="0"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;