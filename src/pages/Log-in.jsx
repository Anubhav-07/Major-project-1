import React, { useState } from 'react';
import Validation from './LoginValidation';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''

    })

    const [error, setError] = useState({}) 
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    } 
    const handleSubmit = (event) => { 
        event.preventDefault(); 
        setError(Validation(values));
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action='' onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <div className='mb-3'>
                        <label htmlFor='email'><strong>E-mail id</strong></label>
                        <input
                            type="email"
                            placeholder="Email"
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        <span>{error.email && <span className='text-danger'>{error.email}</span> }</span>
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
                        <span>{error.password && <p className='text-danger'>{error.password}</p>}</span>
                    </div>
                    <button className='btn btn-success border w-100' type="submit">Login</button>
                    <p >Don't have an account ? You can register here</p>
                    <Link to="/signup" button className='btn btn-bold border w-100' type="submit">Sign-up</Link>
                </form>

            </div>
        </div>
    );
};

export default Login;
