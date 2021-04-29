import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrees } from '../../store/treehouses';
import Listing from './Listing';
import './Listing.css';

function Treehouses () {

  const treeState = useSelector(state => state.trees);
  const trees = Object.values(treeState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrees());
  }, [dispatch])

  return (
    <div>
      <div>
        <h1>Stays in Washington</h1>
        {trees.map( (tree) => {
          return <Listing key={tree.id} tree={tree}/>
        })}
      </div>
    </div>
  )
}
export default Treehouses;
