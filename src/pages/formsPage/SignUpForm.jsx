
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/formSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = (values) => {
    // e.preventDefault();
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    dispatch(signUp(userData));
    naviagte("/signin", true);
    resetForm(); //getting frm onSubmit {resetForm()}...destructured from "formikBag"
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="signup-form">
      <h1 className='loginHeading' >Signup Form!</h1>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />
        </div>

        {/* <button type="submit">Sign Up</button> */}
        <input value="Sign Up" type="submit" className="loginButton" />

        <div className="forSignUp">
          {" "}
          If already Registered user...
          <Link to="/signin">Sign In</Link>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
