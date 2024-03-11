import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/AddMovie.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
const AddMovie = () => {
  const movieValidationSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required(),
    trailer: yup.string().required(),
    rating: yup.string().required(),
    summary: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      poster: '',
      trailer: '',
      rating: '',
      summary: '',
    },
    validationSchema: movieValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="add-movie-container">
      {' '}
      <form className="add-movie-class" onSubmit={formik.handleSubmit}>
        Add Movie
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">submit</Button>
      </form>
    </div>
  );
};

export default AddMovie;
