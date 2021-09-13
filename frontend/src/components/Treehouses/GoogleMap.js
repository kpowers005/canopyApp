import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { useState } from 'react';
import MapMarker from './MapMarker'

// import { mapKey } from '../../store/map';

let mapKey
(async function key(){
  const res = await fetch('/api/map')
  mapKey = await res.json()
})()

export function GoogleMap (props) {
  const [isVisible, setIsVisible] = useState(true)
  const containerStyle = {
    position: 'fixed',
    top: '60px',
    width: '100%',
    height: '85%',
    margin: '3px 0px 0px 0px'
  }



if (!props.google){
  return <div>loading...</div>
} else {
  return(
    <Map google={props.google}
          zoom={4}
          containerStyle={containerStyle}
          style={{height: '100%', width: '43%'}}
          initialCenter={{ lat: 39.8283, lng: -98.5795 }}
          >
      {props.trees.map(tree => {
       return <Marker key={tree.id} position={{lat: tree.latitude, lng: tree.longitude}}><InfoWindow style={{position: 'absolute', top : '0'}} visible={isVisible}><div>{tree.title}</div></InfoWindow></Marker>
      })}
    </Map>
)
}
}

export default GoogleApiWrapper(() => {

  return {
  apiKey: mapKey,
  loading: true,
}

})(GoogleMap)
