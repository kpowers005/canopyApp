import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';




export function GoogleMap (props) {



  const containerStyle = {
    position: 'fixed',
    top: '60px',
    width: '100%',
    height: '85%',
    margin: '3px 0px 0px 0px'
  }


if (!props.google){
  return null
} else {
  return(
        <Map google={props.google}
              zoom={4}
              containerStyle={containerStyle}
              style={{height: '100%', width: '43%'}}
              initialCenter={{ lat: 39.8283, lng: -98.5795 }}
              >
          {props.trees.map(tree => {
           return <Marker key={tree.id} position={{lat: tree.latitude, lng: tree.longitude}} />
          })}
        </Map>
  )
}
}

export default GoogleApiWrapper(() => {
  return {
  apiKey: ,
  loading: true,
}

})(GoogleMap);
