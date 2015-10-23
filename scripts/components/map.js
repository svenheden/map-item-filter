import React, { Component, PropTypes } from 'react';
import MapMarker from './map-marker';
import shallowEqual from 'react-pure-render/shallowEqual';

export default class Map extends Component {
  constructor() {
    super();
    this.state = { mapIsInitialized: false };
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.map);
    this.setState({ mapIsInitialized: true });
    this.setupMapEventListener();
  }

  componentWillUnmount() {
    this.teardownMapEventListener();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(nextProps.items, this.props.items) || !shallowEqual(nextState, this.state);
  }

  componentWillUpdate(nextProps) {
    this.props.onVisibleItemsChange(nextProps.items.map(item => item.id));
  }

  setupMapEventListener() {
    this.listener = this.map.addListener('idle', () => {
      const itemsInView = this.props.items
        .filter(this.itemIsInView.bind(this))
        .map(item => item.id);

      this.props.onVisibleItemsChange(itemsInView);
    });
  }

  teardownMapEventListener() {
    window.google.maps.event.removeListener(this.listener);
  }

  itemIsInView(item) {
    return this.map.getBounds().contains(new window.google.maps.LatLng(item.location.lat, item.location.lng));
  }

  render() {
    let markers;

    if (this.state.mapIsInitialized) {
      const bounds = new window.google.maps.LatLngBounds();

      markers = this.props.items.map(item => {
        bounds.extend(new window.google.maps.LatLng(item.location.lat, item.location.lng));
        return <MapMarker key={item.id} location={item.location} map={this.map}/>;
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
  onVisibleItemsChange: PropTypes.func
};
