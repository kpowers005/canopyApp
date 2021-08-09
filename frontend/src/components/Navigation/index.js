import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(sessionActions.login({
      credential: 'demo@demo.com',
      password: 'password' }))
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
        <button onClick={login}>Demo</button>
      </>
    );
  }

  return (
    <div className='navbar-holder'>
      <nav>
        <ul className='navbar'>
          <li className='navbar-links--logo'>
            <Link to="/">Canopy</Link>
          </li>
          <li className='navbar-links'>
              {isLoaded && sessionLinks}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
