import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?enablejsapi=1&amp&autoplay=1&mute=1;origin=https%3A%2F%2Fmdbootstrap.com"
        }
        allowFullScreen=""
      />
    </div>
  );
};

export default VideoBackground;
