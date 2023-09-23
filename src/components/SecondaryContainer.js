import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-6 relative z-50">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.addUpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
