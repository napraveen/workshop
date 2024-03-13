import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const getMovies = () => {
    fetch("https://65f16f3f034bdbecc7629408.mockapi.io/Movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {/* if you need to use =>{} you need to give return  */}
      {/* EVERY DATA IS FIRST PASSED INTO VIRTUAL DOM THEN ONLY IT COMES TO REAL DOM, */}
      {movie.map((list, index) => (
        // KEY IS FOR VIRTUAL DOM
        <div key={index}>
          <Movie movieTake={list} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
