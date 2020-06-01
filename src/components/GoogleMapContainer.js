import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

var that;

export function movetoLocation(location) {
	var googleMapGeocoder = new window.google.maps.Geocoder();
	var address = location + ", New Zealand";
	googleMapGeocoder.geocode({ address: address }, function (results, status) {
		if (status === window.google.maps.GeocoderStatus.OK) {
			that.setState({
				center: results[0].geometry.location,
				zoom: 12,
			});
		} else {
			alert("Geocoder ERROR: " + status);
		}
	});
}

export class GoogleMapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { center: { lat: -41.670462, lng: 174.7258999 }, zoom: 8 };
		this.movetoLocation = movetoLocation.bind(this);
		that = this;
	}

	render() {
		return (
			<div className="row mt-4">
				<div className="col-sm-2"></div>
				<Map style={{  width: '90%', height: '75%', position: 'absolute', left: '5%' }} google={this.props.google} zoom={this.state.zoom} center={this.state.center} initialCenter={{lat: -41.670462, lng: 174.7258999}}>
				</Map>
                <div className="col-sm-2"></div>
			</div>
		);
	}
}

// AIzaSyCXGx1RL8a9HUj8_5n9JZhZpyAvgMf_sHo

export default GoogleApiWrapper({
	apiKey: ("AIzaSyCXGx1RL8a9HUj8_5n9JZhZpyAvgMf_sHo")
})(GoogleMapContainer);
