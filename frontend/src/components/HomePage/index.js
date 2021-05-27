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
              <h2 className='splashy-title'>Explore the World like never before</h2>
              <img className='splashy-image' alt='' src='https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/splashy33.jpeg'></img>
              {!user && <button onClick={() => login()}>Try My Site!</button>}
            </div>
        </div>
      </main>
  )
}


export default HomePage;
