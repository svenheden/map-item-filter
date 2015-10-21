import React, { Component, PropTypes } from 'react';
import MapMarker from './map-marker';
import shallowEqual from 'react-pure-render/shallowEqual';
const gm = window.google.maps;

export default class Map extends Component {
  constructor() {
    super();
    this.state = { mapIsLoaded: false };
  }

  componentDidMount() {
    this.map = new gm.Map(this.refs.map);
    this.setState({ mapIsLoaded: true });
    this.setupMapEventListener();
  }

  componentWillUnmount() {
    this.teardownMapEventListener();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(nextProps.items, this.props.items) || !shallowEqual(nextState, this.state);
  }

  setupMapEventListener() {
    this.listener = this.map.addListener('idle', () => {
      const itemsInView = this.props.items
        .filter(this.itemIsInView.bind(this))
        .map(item => item.id);

      this.props.onBoundsChange(itemsInView);
    });
  }

  teardownMapEventListener() {
    gm.event.removeListener(this.listener);
  }

  itemIsInView(item) {
    return this.map.getBounds().contains(new gm.LatLng(item.location.lat, item.location.lng));
  }

  render() {
    let markers;

    if (this.state.mapIsLoaded) {
      const bounds = new gm.LatLngBounds();

      markers = this.props.items.map(item => {
        bounds.extend(new gm.LatLng(item.location.lat, item.location.lng));
        return <MapMarker key={item.id} location={item.location} map={this.map} heading={item.heading}/>;
      });

      this.map.fitBounds(bounds);
    }

    return (
      <div ref="map" className="map">
        {markers}
      </div>
    );
  }
}

Map.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired
    }).isRequired
  })),
  onBoundsChange: PropTypes.func
};
