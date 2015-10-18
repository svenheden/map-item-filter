import React, { Component, PropTypes } from 'react';

export default class Pill extends Component {
  render() {
    return (
      <button type="button" className="pill">{this.props.label}</button>
    );
  }
}

Pill.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};
