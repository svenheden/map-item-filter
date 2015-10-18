import React, { Component } from 'react';
import FilterSummary from '../components/filter-summary';
import Map from '../components/map';

export default class MapContainer extends Component {
  render() {
    return (
      <div className="map-container">
        <FilterSummary category={this.props.category} subCategories={this.props.subCategories} numberOfItems={this.props.items.length}/>
        <Map/>
      </div>
    );
  }
}
