import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-screen bg-gradient-to-r from-black via-black/70 to-transparent text-white flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <h1 className="text-5xl md:text-6xl font-bold w-1/2">
        {title}
      </h1>

      <p className="mt-6 text-lg md:text-xl w-1/2 text-gray-200 line-clamp-3">
        {overview}
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition duration-300">
          ▶ Play
        </button>

        <button className="bg-gray-500/70 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-500/50 transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;