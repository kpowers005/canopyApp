import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findTreehouse } from '../../store/treehouses';
import { Marker, InfoWindow } from 'google-maps-react';


const MapMarker = ({ id }) => {
  const tree  = useSelector(state => state.trees);
  const dispatch = useDispatch()
  // let tree
  // (async function key(){
  //   const res = await fetch('/api/map')
  //   mapKey = await res.json()
  // })()
  // useEffect(() => {
  //  dispatch(findTreehouse(id))
  // }, [id])

  return (
    <Marker position={{lat: tree.lat, lng: tree.lng}}>
      {/* <InfoWindow>
      </InfoWindow> */}
    </Marker>
  )
}


export default MapMarker;
