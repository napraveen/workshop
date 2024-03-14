import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://65f16f3f034bdbecc7629408.mockapi.io/Movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  console.log("akjlgbarsjbg", movie);
  return (
    <div>
      <iframe
        width="100%"
        height="900px"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
