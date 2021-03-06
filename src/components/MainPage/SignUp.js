import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const SignUpForm = ({ errors, touched, values, status }) => {
  const [ users, setUsers ]= useState([]);
  console.log('users', users)

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <div>
      <h1>Sign Up</h1>
      <Form >
        <Field type='text' name='name' placeholder='Name' />
        {touched.name && errors.name && <p className>{errors.name}</p>}

        <Field type='text' name='email' placeholder='Email' />
        {touched.email && errors.email && <p className>{errors.email}</p>}

        <Field type='password' name='password' placeholder='Password' />
        {touched.password && errors.password && <p className>{errors.password}</p>}

        <label>
          <Field 
          type='checkbox' 
          name='termsOfService' 
          checked={values.termsOfService} />
          {touched.termsOfService && errors.termsOfService && <p className>{errors.termsOfService}</p>}

        </label>
          Terms of Service
        <button type='submit'> Submit </button>
      </Form>
      {users.map(user => (
      <p key={user.id}>{user.email}</p>
      ))}
    </div>
  );
};


const FormikSignUpForm = withFormik({
  mapPropsToValues({ name, email, password, termsOfService }){
    return{
      name: name ||'',
      email: email || '',
      password: password || '',
      termsOfService: termsOfService || false,
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    termsOfService: Yup.boolean().oneOf([true],'must accept terms and conditions '), 
  }),

  handleSubmit(values, { setStatus }){
    axios
    .post('https://reqres.in/api/users/ ', values)
    .then(res => {
      setStatus(res.data);
    })
    .catch(err => console.log(err.message));
  }

})(SignUpForm); //currying funtions in JavaScript

export default FormikSignUpForm;
