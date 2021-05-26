import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTrees } from '../../store/treehouses';
import GoogleMapReact from 'google-map-react';
import Listing from './Listing';
import GoogleApiWrapper, { GoogleMap } from './GoogleMap';
import { Loader } from "@googlemaps/js-api-loader";


import './index.css'



function Treehouses () {

  const treeState = useSelector(state => state.trees);
  const trees = Object.values(treeState);
  const newTrees = () => {
     return [...trees];
  };
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTrees());
  }, [dispatch])

  return (
    <div className='explore-page'>
      <div className='explore-page--listings'>
        <div className='explore-page--header_container'>
          <h3 className='explore-page--header'>Discover nature in some of our best treehouses</h3>
        </div>
        {trees.map( (tree) => {
          return <Listing key={tree.id} tree={tree}/>
        })}
      </div>
      <div id='map'>
         <GoogleApiWrapper trees={newTrees()}>
          <GoogleMap>

          </GoogleMap>
        </GoogleApiWrapper>

        {/* <GoogleMapReact>
        {trees.map( (tree) => {
          return  <MapMarker lat={tree.latitude} lng={tree.longitude} tree={tree} key={tree.id} />
        })} */}
        {/* </GoogleMapReact> */}

      </div>
      {/* <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}`}
        ></script> */}
    </div>
  )
}
export default Treehouses;
