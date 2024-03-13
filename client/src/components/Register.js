import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import "../styles/Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const registerValidationSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().required().min(4),
    password: yup.string().required().min(4),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="register-container">
      {" "}
      <form className="register-class" onSubmit={formik.handleSubmit}>
        Register
        <TextField
          id="username"
          className="textfield"
          label="UserName"
          variant="outlined"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && formik.errors.username}
          helperText={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null
          }
          name="username"
        />
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
        <h3>
          Already have an account? Click here <Link to="/login">Login</Link>
        </h3>
      </form>
    </div>
  );
};

export default Register;
