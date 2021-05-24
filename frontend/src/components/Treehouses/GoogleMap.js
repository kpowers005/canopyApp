import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';





export function GoogleMap ( props ) {
  const { state } = props
  return(
    <Map google={props.google} zoom={5}>
      {state.map(tree => {
       return <Marker key={tree.id} position={{lat: tree.latitude, lng: tree.longitude}} />
      })}
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(GoogleMap);
