import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="p-4 px-12 bg-gray-200 text-black text-xl rounded-lg font-bold hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="mx-2 p-4 px-12 bg-gray-500 text-blac text-xl bg-opacity-50 rounded-lg font-bold">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
