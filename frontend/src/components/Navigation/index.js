import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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
          {/* <li className='navbar-links'>
            <Link to="/treehouses">Explore</Link>
          </li> */}
          <li className='navbar-links'>
              {isLoaded && sessionLinks}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
