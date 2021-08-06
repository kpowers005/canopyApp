import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrees } from '../../store/treehouses';
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

  useEffect(() => {

    dispatch(getTrees())
  }, [dispatch]);

  return (
      <main>
        <div>
            <div className='splashy'>
              <Link to='/treehouses'><h2 className='splashy-title'>Explore the World like never before</h2></Link>
              <img className='splashy-image' alt='' src='https://canopyappkp.s3.us-east-2.amazonaws.com/wp2085681.jpg'></img>
              {!user && <button onClick={() => login()}>Try My Site!</button>}
            </div>
        </div>
      </main>
  )
}


export default HomePage;
