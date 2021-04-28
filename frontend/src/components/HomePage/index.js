import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrees } from '../../store/treehouses';


function HomePage () {
  const trees = useSelector(state => state.trees);
  const treeArray = Object.values(trees);
  console.log(treeArray, 'array of treesssss')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrees())
  }, [dispatch]);

  return (
      <main>
        <div>
            <h1>Welcome to Canopy?</h1>
        </div>
      </main>
  )
}


export default HomePage;
