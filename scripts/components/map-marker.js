import React, { Component, PropTypes } from 'react';

export default class MapMarker extends Component {
  constructor() {
    super();

    this.state = {
      marker: null
    };
  }

  componentDidMount() {
    this.setState({
      marker: new window.google.maps.Marker({
        map: this.props.map,
        position: new window.google.maps.LatLng(this.props.location.lat, this.props.location.lng)
      })
    });
  }

  componentWillUnmount() {
    this.state.marker.setMap(null);
  }

  render() {
    return <div></div>;
  }
}

MapMarker.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired
  }).isRequired,
  map: React.PropTypes.object.isRequired
};
