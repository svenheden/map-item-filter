import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames-minimal';

const CategoryFilterItem = props => {
  const classes = classNames({
    'category-filter__link': true,
    'category-filter__link--selected': props.selected
  });

  return (
    <a
      href="#"
      className={classes}
      onClick={ev => handleClick(ev, props)}
    >{props.label}</a>
  );
};

const handleClick = (ev, props) => {
  ev.preventDefault();

  if (!props.selected) {
    props.onClick(props.id);
  }
};

CategoryFilterItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

CategoryFilterItem.defaultProps = {
  selected: false
};

export default CategoryFilterItem;
