import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <h3 className="item__heading">{this.props.heading}</h3>

        <div className="item__column">
          <strong>Adress</strong>
          {this.props.address.map((row, index) =>
            <span key={index}>{row}</span>
          )}
        </div>

        <div className="item__column">
          <strong>Telefonnummer</strong>
          <span>{this.props.phone}</span>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  heading: PropTypes.string.isRequired,
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  phone: PropTypes.string.isRequired
};
