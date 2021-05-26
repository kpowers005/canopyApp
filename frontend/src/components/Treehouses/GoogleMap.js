import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useEffect } from 'react';
import { Component } from 'react';



export class GoogleMap extends Component {


  getDerivedState(){

  }

render() {

  const containerStyle = {
    position: 'fixed',
    top: '60px',
    width: '100%',
    height: '85%',
    margin: '3px 0px 0px 0px'
  }



  return(
        <Map google={this.props.google}
              zoom={4}
              containerStyle={containerStyle}
              style={{height: '100%', width: '43%'}}
              initialCenter={{ lat: 39.8283, lng: -98.5795 }}
              >
          {this.props.trees.map(tree => {
           return <Marker key={tree.id} position={{lat: tree.latitude, lng: tree.longitude}} />
          })}
        </Map>
  )
}
}

export default GoogleApiWrapper(() => {
  return {
  apiKey: process.env.REACT_APP_MAP_KEY,
  loading: true,
}

})(GoogleMap);
