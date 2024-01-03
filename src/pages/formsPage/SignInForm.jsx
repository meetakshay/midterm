import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './SignInForm.css';
import { Button } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/formSlice';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SignInForm = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userData = useSelector((state) => state.form.userData);


  return (
    <Formik
    
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (userData.email === values.email && userData.password === values.password) {
        const data = { email: values.email, password: values.password };
          dispatch(login(data))
          alert('Login Successful');
          navigate('/products', true);
        } else {
          alert('Wrong Credentials');
        }
      }}
    >
      <Form className="signin-form">
        <h1 className="loginHeading">Login Form</h1>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className="error-message" />
        </div>

        <div className="form-group">
          <input value="Sign In" type="submit" className="loginButton" />
        </div>

        <div className="forSignUp">
          If not a Registered user...
          <Link to="/signup">Sign Up</Link>
        </div>
      </Form>
    </Formik>
  );
};

export default SignInForm;
