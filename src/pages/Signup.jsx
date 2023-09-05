import React, { useState } from 'react';
import Validation from './SignupValidation';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
const SignupForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''

  })
  const navigate = useNavigate()
  const [error, setError] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
    if (error.name === "" && error.email === "" && error.password === "") {
      axios.post('http://localhost:9081/signup', values)
        .then(res => {
          navigate('/login');
        }
        )
        .catch(err => console.log(err));
    }

  }


  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action='' onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input
              type="name"
              placeholder="Name"
              name='name'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {error.name && <span className='text-danger'>{error.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>E-mail id</strong></label>
            <input
              type="email"
              placeholder="Email"
              name='email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {error.email && <span className='text-danger'>{error.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Password"
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {error.password && <span className='text-danger'>{error.password}</span>}
          </div>

          <button className='btn btn-success w-100' type="submit">Sign Up</button>
        </form>
        <p>Already have an account ? You can log-in here</p>
        <Link to="/login" button className='btn btn-bold border w-100' type="submit">Log-in</Link>
      </div>
    </div>
  );
};

export default SignupForm;
