import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './Signup.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, email, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className='signUp__form-holder'>
      <form className='signUp__form-signin' onSubmit={handleSubmit}>
        <h3 className='signUp__form-header'>Sign Up!</h3>
        <ul className='signUp__form-errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className='signUp__form-inputs'>
          {/* <label> */}
            {/* Email */}
            <input
              placeholder='First Name'
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              placeholder='Last Name'
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              placeholder='Email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          {/* </label> */}
          {/* <label> */}
            {/* Password */}
            <input
              placeholder='Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          {/* </label> */}
          {/* <label> */}
            {/* Confirm Password */}
            <input
              placeholder='Confirm Password'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          {/* </label> */}
          <button className='form-button' type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormPage;
