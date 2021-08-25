import GoogleMapReact from 'google-map-react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mapKey } from '../../store/map';




const TreehouseMap = () => {
  return (
  <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBUivLM-j-cZtxNme6CPsTKfl7R3YjxHk'}}
      defaultCenter={{lat : 59.955413, lng: 30.33}}
      defaultZoom={5}
    >
  </GoogleMapReact>
  )
}


export default TreehouseMap;
