import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
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
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar-holder'>
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink exact to="/">Canopy</NavLink>
          </li>
          <li>
            <NavLink to="/treehouses">Explore</NavLink>
          </li>
          <li>
              {isLoaded && sessionLinks}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
