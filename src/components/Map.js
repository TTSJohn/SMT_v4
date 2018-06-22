import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
 
export class SMTMap extends Component {
  render() {
  	const markers = this.props.markers || []
    return (
   		<GoogleMap 
   			defaultZoom={3}
   			defaultCenter={{ lat: 41.057104, lng: -73.540031}}>
   		{markers.map((marker, index) => (
   			<Marker {...marker} />
   			
   		)
   		)}
   		</GoogleMap>
    );
  }
}
 
export default withGoogleMap(SMTMap);