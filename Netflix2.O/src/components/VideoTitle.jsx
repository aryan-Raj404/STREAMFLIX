import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title , overview}) => {
  return (
    <div className="w-[vw] absolute aspect-video text-white pt-[18%] p-12 z-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/2 mt-2">
        {overview}
      </p>
      <div className="flex gap-4 mt-4">
        <button className="px-6 py-2 flex items-center gap-2 cursor-pointer bg-white text-black rounded-md hover:bg-amber-50 transition">
          <CiPlay1 size={20} />
          Play
        </button>
        <button className="px-6 py-2 flex items-center gap-2 cursor-pointer bg-white text-black rounded-md hover:bg-amber-50 transition">
          <IoIosInformationCircleOutline size={20} />
          Watch More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
