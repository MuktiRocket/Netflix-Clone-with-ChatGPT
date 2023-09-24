import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-3xl p-2 m-2 md:p-0 md:m-0 text-xl font-bold">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="p-2 m-2 md:p-0 md:m-0 md:py-4 md:px-12 outline-5 md:bg-gray-200 md:text-black text-white md:text-xl text-sm md:rounded-lg rounded-sm md:font-bold hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="p-2 m-2 md:mx-2 md:p-4 md:px-12 bg-gray-500 text-white md:text-xl text-xs bg-opacity-50 rounded-lg font-bold hover:bg-opacity-30">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
