import { Button, ratingClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://65f16f3f034bdbecc7629408.mockapi.io/Movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  const ratingStyles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  console.log("akjlgbarsjbg", movie);
  return (
    <div>
      <iframe
        width="70%"
        height="700px"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>
          <h3 className="movie-rating" style={ratingStyles}>
            🌟 {movie.rating}
          </h3>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
      <Button
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
};

export default MovieDetail;
