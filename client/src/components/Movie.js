import React, { useState } from "react";
import vikramImage from "../images/vikram.jpg";
import "../styles/movie.css";
import Counter from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoIcon from "@mui/icons-material/Info";
// import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

const Movie = ({ movieTake }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return (
    <Card className="movie-container">
      <CardMedia
        // sx={{ height: 300 }}
        image={movieTake.poster}
        title="green iguana"
        className="movie-poster"
      />
      <CardContent>
        {" "}
        <div className="movie-spec">
          <h2 className="movie-name">
            {" "}
            {movieTake.name}
            <IconButton
              color="primary"
              aria-label="Toggle-Description"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <ExpandLessIcon fontSize="large" />
              ) : (
                <ExpandMoreIcon fontSize="large" />
              )}
            </IconButton>
            <IconButton color="primary" aria-label="Movie-Info">
              <InfoIcon
                fontSize="medium"
                onClick={() => navigate(`/portal/view/${movieTake.id} `)}
              />
            </IconButton>
          </h2>
          <h3 className="movie-rating">🌟{movieTake.rating}</h3>
        </div>
      </CardContent>
      {show ? (
        <div className="movie-summary-container">
          <p className="movie-summary">{movieTake.summary}</p>
        </div>
      ) : (
        ""
      )}
      <CardActions>
        {" "}
        <Counter />
      </CardActions>
    </Card>
  );
};

export default Movie;
