import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as sessionActions from '../../store/session';
import './index.css'
import { Link } from 'react-router-dom';


function HomePage () {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.session)

  const login = () => {
    dispatch(sessionActions.login({
      credential: 'demo@demo.com',
      password: 'password' }))
  }

  return (
      <main>
        <div>
            <div className='splashy'>
              <div className='nail'></div>
              <div className='frame__holder'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='pictureFrame'>
                <Link to='/treehouses'><h1 className='splashy-title'>Explore the World like never before</h1></Link>
              </div>
              <img className='splashy-image' alt='outdoors' src='https://canopyappkp.s3.us-east-2.amazonaws.com/wp2085681.jpg'></img>
              {/* {!user && <button onClick={() => login()}>Try My Site!</button>} */}
            </div>
        </div>
      </main>
  )
}


export default HomePage;
