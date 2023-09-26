import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return <Shimmer />;
  const mainMovie = movies[4];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="md:pt-0 pt-[40%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
