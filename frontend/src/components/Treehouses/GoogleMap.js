import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';




export function GoogleMap ( props ) {

  const { state } = props
  const trees = state.trees
  const containerStyle = {
    position: 'fixed',
    top: '60px',
    width: '100%',
    height: '85%',
    margin: '3px 0px 0px 0px'
  }
  return(
      <Map google={props.google}
            zoom={4}
            containerStyle={containerStyle}
            style={{height: '100%', width: '43%'}}
            initialCenter={{ lat: 39.8283, lng: -98.5795 }}
            >
        {trees.map(tree => {
         return <Marker key={tree.id} position={{lat: tree.latitude, lng: tree.longitude}} />
        })}
      </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(GoogleMap);
