import React, { Component, PropTypes } from 'react';

export default class MapMarker extends Component {
  componentDidMount() {
    this.marker = new window.google.maps.Marker({
      map: this.props.map,
      position: new window.google.maps.LatLng(this.props.location.lat, this.props.location.lng)
    });
  }

  componentWillUnmount() {
    this.marker.setMap(null);
  }

  render() {
    // this component needs no DOM
    return null;
  }
}

MapMarker.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired
  }).isRequired,
  map: React.PropTypes.object.isRequired
};
