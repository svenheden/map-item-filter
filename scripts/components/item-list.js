import React, { Component, PropTypes } from 'react';
import Item from '../components/item';

export default class ItemList extends Component {
  render() {
    return (
      <ol className="item-list">
        {this.props.items.map(item =>
          <li className="item-list__item" key={item.id}>
            <Item heading={item.heading} address={item.address} phone={item.phone}/>
          </li>
        )}
      </ol>
    );
  }
}

const itemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  phone: PropTypes.string.isRequired
});

ItemList.propTypes = {
  items: PropTypes.arrayOf(itemShape)
};
