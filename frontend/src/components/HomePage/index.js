import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrees } from '../../store/treehouses';
import * as sessionActions from '../../store/session';
import './index.css'

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
              <h2 className='splashy-title'>Your next adventure might just be in your backyard</h2>
              {!user && <button onClick={() => login()}>Try My Site!</button>}
              <h4 className='splashy-title'>...or someone else's</h4>
              <img className='splashy-image' alt='' src='https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/splash.jpeg'></img>
            </div>
        </div>
      </main>
  )
}


export default HomePage;
