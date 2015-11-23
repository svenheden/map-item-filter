import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Item from '../components/item';

const ItemList = props => {
  return (
    <ol className="item-list">
      {props.items.map(item =>
        <li className="item-list__item" key={item.id}>
          <Item heading={item.heading} address={item.address} phone={item.phone}/>
        </li>
      )}
    </ol>
  );
};

const itemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  phone: PropTypes.string.isRequired
});

ItemList.propTypes = {
  items: PropTypes.arrayOf(itemShape)
};

export default ItemList;
