import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
	this.onMarkerClick = this.onMarkerClick.bind(this);
 this.onMapClicked = this.onMapClicked.bind(this);
}

onMarkerClick = (props, marker, e)=>{
  this.setState({
	selectedPlace: props,
	activeMarker: marker,
	showingInfoWindow: true
  });
}

onMapClicked = (props)=> {
   if (this.state.showingInfoWindow) {
	 this.setState({
	   showingInfoWindow: false,
	   activeMarker: null
	 })
   }
 }

render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAPHEKTmg_-2YGuO7CSoQgw-nunhQL7xTM")
})(MapContainer)
