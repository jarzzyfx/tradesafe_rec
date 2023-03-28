import React from 'react';
import { Formik, Form } from 'formik';
import './Form.css';
import CustomInput from './CustomInput/CustomInput';
import { usersSchema } from '../../schemas';

const UserForm = ({ formTitle, formType, onSubmit }) => {
  return (
    <div>
      {formType === 'register' ? (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={usersSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="Form">
                <h3>{formTitle}</h3>
                <div className="form_content">
                  <CustomInput
                    label="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Write your first name here"
                  />
                  <CustomInput
                    label="Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Write your last name here"
                  />
                  <CustomInput
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                  <CustomInput
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="123##$M"
                  />
                  <CustomInput
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="123##$M"
                  />
                  <button disabled={isSubmitting} className="btn" type="submit">
                    Register Your Account
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        formType === 'login' && (
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={usersSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="form">
                <div className="Form">
                  <h3>{formTitle}</h3>
                  <div className="form_content">
                    <CustomInput
                      label="Email"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                    />
                    <CustomInput
                      label="Password"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="123##$M"
                    />
                    <button disabled={isSubmitting} className="btn" type="submit">
                      Login to your account
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )
      )}
    </div>
  );
};

export default UserForm;
