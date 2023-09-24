import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async (e) => {
    try {
      // const gptQuery =
      //   "Act as movie recommendation system and suggest some movies for tha query" +
      //   searchText.current.value +
      //   ". Only give me names of 5 movies , coma separated like example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      // const gptResults = await openai.chat.completions.create({
      //   messages: [{ role: "user", content: gptQuery }],
      //   model: "gpt-3.5-turbo",
      // });
      const response = "Avengers, Justice League, Don, Jawan, Pathan";
      const gptMovies = response.split(",");

      const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
      const tmdbResult = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[50%] flex justify-center  md:pt-[10%] md:flex md:justify-center">
      <form
        className="md:w-1/2 bg-black grid grid-cols-12 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-2 md:p-4 md:m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="md:py-2 py-1 md:px-4 px-2 col-span-3 md:m-4 m-2 bg-red-700 text-white rounded-lg hover:bg-opacity-80 font-bold md:text-xl"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
