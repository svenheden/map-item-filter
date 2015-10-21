import React, { Component, PropTypes } from 'react';
const gm = window.google.maps;

export default class MapMarker extends Component {
  constructor() {
    super();

    this.state = {
      marker: null
    };
  }

  componentDidMount() {
    this.setState({
      marker: new gm.Marker({
        map: this.props.map,
        position: new gm.LatLng(this.props.location.lat, this.props.location.lng),
        title: this.props.heading
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

// MapMarker.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     location: PropTypes.shape({
//       lat: PropTypes.string.isRequired,
//       lng: PropTypes.string.isRequired
//     }).isRequired
//   }))
// };
