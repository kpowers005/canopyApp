import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className='form-holder'>
      <form className='form-signin' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <ul className='form-errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        {/* <label>
          Email */}
        <div className='form-inputs'>
            <input
              placeholder='Email'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          {/* </label> */}
          {/* <label>
            Password */}
            <input
              placeholder='Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          {/* </label> */}
          <button className='form-button' type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
