import React from 'react'
import UserForm from '../../../global/Form/Form';


const Register = () => {

  const handleSubmit = async (values, actions) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values)
    actions.resetForm();
  }

  return (
    <UserForm formType="register" formTitle="Registeration Form" onSubmit={handleSubmit}/>
  )
}

export default Register