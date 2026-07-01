import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  if (!movies) return null;

  const mainMovie = movies[13];

  const {
    original_title,
    overview,
    id,
  } = mainMovie;

  return (
    <div className="relative">
      <VideoTitle
        title={original_title}
        overview={overview}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;