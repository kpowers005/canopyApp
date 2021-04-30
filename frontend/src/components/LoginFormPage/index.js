import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

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

export default LoginFormPage;
