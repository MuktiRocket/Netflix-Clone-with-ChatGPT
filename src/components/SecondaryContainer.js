import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="w-screen bg-black">
      <div className="md:-mt-52 md:pl-6 relative z-40 pl-3">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.addUpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
