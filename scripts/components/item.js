import React, { PropTypes } from 'react';

const Item = props => {
  return (
    <div className="item">
      <h3 className="item__heading">{props.heading}</h3>

      <div className="item__column">
        <strong>Adress</strong>
        {props.address.map((row, index) =>
          <span key={index}>{row}</span>
        )}
      </div>

      <div className="item__column">
        <strong>Telefonnummer</strong>
        <span>{props.phone}</span>
      </div>
    </div>
  );
};

Item.propTypes = {
  heading: PropTypes.string.isRequired,
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  phone: PropTypes.string.isRequired
};

export default Item;
