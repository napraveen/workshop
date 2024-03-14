import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/AddMovie.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`https://65f16f3f034bdbecc7629408.mockapi.io/Movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv))
      .then((show) => setShow(true));
  }, []);
  console.log(movie);

  return <div>{show ? <EditForm movie={movie} /> : "Loading..."}</div>;
};

const EditForm = ({ movie }) => {
  const movieValidationSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(10).url(),
    trailer: yup.string().required().min(10).url(),
    rating: yup.number().required().min(0).max(10),
    summary: yup.string().required().min(20),
  });

  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      trailer: movie.trailer,
      rating: movie.rating,
      summary: movie.summary,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (updatedValues) => {
      editMovie(updatedValues);
      console.log(updatedValues);
    },
  });
  const navigate = useNavigate();
  const editMovie = (updatedValues) => {
    fetch(`https://65f16f3f034bdbecc7629408.mockapi.io/Movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedValues),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/portal/movie"));
  };

  return (
    <div>
      {" "}
      <div className="add-movie-container">
        {" "}
        <form className="add-movie-class" onSubmit={formik.handleSubmit}>
          <h1> Add Movie</h1>
          <TextField
            id="name"
            className="textfield"
            label="Name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            helperText={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : null
            }
            name="name"
          />
          <TextField
            id="poster"
            className="textfield"
            label="Poster"
            variant="outlined"
            value={formik.values.poster}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.poster && formik.errors.poster}
            helperText={
              formik.touched.poster && formik.errors.poster
                ? formik.errors.poster
                : null
            }
            name="poster"
          />
          <TextField
            id="trailer"
            className="textfield"
            label="Trailer"
            variant="outlined"
            value={formik.values.trailer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.trailer && formik.errors.trailer}
            helperText={
              formik.touched.trailer && formik.errors.trailer
                ? formik.errors.trailer
                : null
            }
            name="trailer"
          />
          <TextField
            id="rating"
            className="textfield"
            label="Rating"
            variant="outlined"
            value={formik.values.rating}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.rating && formik.errors.rating}
            helperText={
              formik.touched.rating && formik.errors.rating
                ? formik.errors.rating
                : null
            }
            name="rating"
          />
          <TextField
            id="summary"
            className="textfield"
            label="Summary"
            variant="outlined"
            value={formik.values.summary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.summary && formik.errors.summary}
            helperText={
              formik.touched.summary && formik.errors.summary
                ? formik.errors.summary
                : null
            }
            name="summary"
          />
          <Button variant="contained" type="submit">
            submit
          </Button>
        </form>
      </div>
      ;
    </div>
  );
};

export default EditMovie;
