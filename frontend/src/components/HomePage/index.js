import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrees } from '../../store/treehouses';
import SearchBar from '../SearchBar'
import './index.css'

function HomePage () {
  const trees = useSelector(state => state.trees);
  const treeArray = Object.values(trees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrees())
  }, [dispatch]);

  return (
      <main>
        <div>
          <SearchBar />
            <div className='splashy'>
              <img className='splashy-image' alt='' src='https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/splash.jpeg'></img>
            </div>
        </div>
      </main>
  )
}


export default HomePage;
