import React from "react";
import MovieListShimmer from "./MovieListShimmer";

const SecondaryContainerShimmer = () => {
  return (
    <div className="w-screen">
      <div className="md:pt-[50%] md:m-[0] md:bg-black">
        <MovieListShimmer />
        <MovieListShimmer />
        <MovieListShimmer />
        <MovieListShimmer />
      </div>
    </div>
  );
};

export default SecondaryContainerShimmer;
