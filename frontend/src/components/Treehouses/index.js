import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrees } from '../../store/treehouses';
import Listing from './Listing';

import GoogleApiWrapper from './GoogleMap';
import './index.css'




function Treehouses () {

  const treeState = useSelector(state => state.trees);
  const {key} = useSelector(state => state.map)
  const trees = Object.values(treeState);

  const dispatch = useDispatch();

console.log(trees)

  useEffect(() => {
    dispatch(getTrees());

  }, [dispatch])

  return (
    <div  id='top' className='explore-page'>
      <div className='explore-page--listings'>
        <div className='explore-page--header_container'>
          <h3 className='explore-page--header'>Discover nature in some of our best treehouses</h3>
        </div>
        {trees.map( (tree) => {
          return <Listing key={tree.id} tree={tree}/>
        })}
        <a className='scroll__up' href='#top'>^Back to Top^</a>
      </div>
      <div id='map'>
        {trees && <GoogleApiWrapper trees={trees}></GoogleApiWrapper>}
      </div>
    </div>
  )
}
export default Treehouses;
