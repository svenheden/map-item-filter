import React, { Component, PropTypes } from 'react';

export default class Map extends Component {
  render() {
    return (
      <div className="map">
        <iframe src="https://www.google.com/maps/embed/v1/search?key=AIzaSyABubpkzgcRb-HlmzjehGJnlx6Qig8rnFc&q=record+stores+in+Seattle"></iframe>
      </div>
    );
  }
}
