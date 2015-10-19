import React, { Component, PropTypes } from 'react';

export default class Pill extends Component {
  render() {
    return (
      <button
        type="button"
        className="pill"
        title={this.props.tooltip}
        onClick={() => this.props.onClick(this.props.id)}
      >{this.props.label}</button>
    );
  }
}

Pill.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
