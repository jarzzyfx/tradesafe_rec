import React from 'react'
import UserForm from '../../../global/Form/Form'

const Login = () => {

 const handleSubmit = async (values, actions) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values)
    actions.resetForm();
  }


  return (
    <UserForm formType="login" formTitle="Login to Site" onSubmit={handleSubmit}/>
  )
}

export default Login