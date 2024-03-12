import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../styles/login.css';
const Login = () => {
  const loginValidationSchema = yup.object({
    email: yup.string().required().min(4),
    password: yup.string().required().min(4),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="login-container">
      {' '}
      <form className="login-class" onSubmit={formik.handleSubmit}>
        Login
        <TextField
          id="email"
          className="textfield"
          label="email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          name="email"
        />
        <TextField
          id="password"
          className="textfield"
          label="password"
          variant="outlined"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          name="password"
        />
        <Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
