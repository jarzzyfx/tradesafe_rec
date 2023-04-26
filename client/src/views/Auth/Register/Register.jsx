import React from 'react'
import { Form, Formik } from 'formik';
import CustomInput from '../../../global/CustomInput/CustomInput';
import { usersSchema } from '../../../schemas';
import axios from 'axios';

const Register = () => {

  

const submit = async ( values, actions) => {
  await axios.post('http://localhost:5000/auth/register', values)
  console.log('success')
  actions.resetForm();
}

  return (
    <div className='Form'>
    <Formik
    initialValues={{firstName: '', lastName:'', email : '', password: '', confirmPassword:''}}
    validationSchema={usersSchema}
    onSubmit={submit}
    >
      {(props) => (
        <Form className='form'>
           <h2>Registration Form</h2>
          <CustomInput
           htmlName={'firstName'}
           label={'First Name'}
           name={'firstName'}
           placeholder='John'
           type={'text'}
           />
          <CustomInput
           htmlName={'lastName'}
           label={'Last Name'}
           name={'lastName'}
           placeholder='Doe'
           type={'text'}
           />
          <CustomInput
           htmlName={'email'}
           label={'Email'}
           name={'email'}
           placeholder='mail@example.com'
           type={'email'}
           />
          <CustomInput
           htmlName={'password'}
           label={'Password'}
           name={'password'}
           placeholder='123Ab@'
           type={'password'}
           />
          <CustomInput
           htmlName={'confirmPassword'}
           label={'Confirm Password'}
           name={'confirmPassword'}
           placeholder='123Ab@'
           type={'password'}
           />
           <button type='submit' className='btn button'>Register your Account</button>
        </Form>
      )}
    </Formik>

    </div>
    )
}

export default Register