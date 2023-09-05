import React, { useState } from 'react'

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState ('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} name='name'  id='name' placeholder='Enter your name' />
        <label htmlFor='email'>E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email-id' id="email" name="email" />
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Your password' id="password" name="password" />

    </form>
    <div>Already have an account ? Log in here</div> 
    </>
  )
}

export default Register