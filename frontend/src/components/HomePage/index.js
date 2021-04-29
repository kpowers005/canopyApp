import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrees } from '../../store/treehouses';
import SearchBar from '../SearchBar'

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
            <h1>Welcome to Canopy?</h1>
            {treeArray.map(trees => {
              return <img alt='' key={trees.id} src={trees.image1}/>
            })}
        </div>
      </main>
  )
}


export default HomePage;
