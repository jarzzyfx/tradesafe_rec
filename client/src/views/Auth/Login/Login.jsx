

import React from 'react'
import { Form, Formik } from 'formik';
import CustomInput from '../../../global/CustomInput/CustomInput';
import { loginSchema } from '../../../schemas';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"]);

  const submit = async (values, actions) => {
    console.log('this is clicked')
    try {
      const response = await axios.post("http://localhost:5000/auth/login", 
        values
      );
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("USERID", response.data.userID);
      navigate("/dashboard");
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='Form'>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginSchema}
        onSubmit={submit}
      >
        {(isSubmitting) => (
          <Form className='form'>
            <h2>Login Form</h2>
            <CustomInput
              htmlName={'email'}
              label={'Email'}
              name={'email'}
              type={'text'}
              placeholder='mail@example.com'
            />
            <CustomInput
              htmlName={'password'}
              label={'Password'}
              name={'password'}
              placeholder='123Ab@'
              type={'password'}
            />
            <button type='submit' className='button btn'>Login to your Account</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login;
