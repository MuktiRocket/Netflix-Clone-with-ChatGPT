import React from "react";
import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = () => {
  return (
    <div className="md:px-6 ">
      <h1 className="md:text-3xl text-xl py-2 text-white"></h1>
      <div className="container-snap flex overflow-x-scroll">
        <div className="md:flex">
          <MovieCardShimmer />
        </div>
      </div>
    </div>
  );
};

export default MovieListShimmer;
