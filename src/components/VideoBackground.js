import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();

  const [trailerKey, setTrailerKey] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    const filterData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer =
      filterData.length > 0
        ? filterData[0]
        : json.results[0];

    if (!trailer) return;

    setTrailerKey(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideo();
    }
  }, [movieId]);

  if (!trailerKey) return null;

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <iframe
        className="w-screen aspect-video scale-150"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
          isMuted ? 1 : 0
        }&controls=0&loop=1&playlist=${trailerKey}&showinfo=0&rel=0`}
        title="Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Sound Button */}
      {/* <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-32 right-20 bg-black/70 text-white border border-gray-400 px-5 py-3 rounded-full hover:bg-black transition duration-300"
      >
        {isMuted ? "🔇" : "🔊"}
      </button> */}
    </div>
  );
};

export default VideoBackground;