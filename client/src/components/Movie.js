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

const Movie = () => {
  const [show, setShow] = useState(true);
  return (
    <Card className="movie-container">
      <CardMedia
        // sx={{ height: 300 }}
        image={vikramImage}
        title="green iguana"
        className="movie-poster"
      />
      <CardContent>
        {" "}
        <div className="movie-spec">
          <h2 className="movie-name">
            {" "}
            Vikram
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
              <InfoIcon fontSize="medium" />
            </IconButton>
          </h2>
          <h3 className="movie-rating">🌟7.5</h3>
        </div>
      </CardContent>
      {show ? (
        <p className="movie-summary">
          "Vikram" is a gripping thriller where an undercover agent navigates
          through a web of deceit to uncover a conspiracy threatening national
          security, testing his loyalty and resolve. With high-octane action and
          intense drama, it keeps viewers on the edge of their seats from start
          to finish.
        </p>
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
