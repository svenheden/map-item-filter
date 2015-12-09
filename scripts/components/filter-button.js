import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import classNames from 'classnames-minimal';

const FilterButton = (props) => {
  const classes = classNames({
    'filter-button': true,
    'filter-button--active': props.active,
    'filter-button--disabled': props.disabled
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={() => handleClick(props)}
    >{props.label}</button>
  );
};

const handleClick = (props) => {
  if (!props.disabled) {
    props.onClick(props.id, props.active);
  }
};

FilterButton.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

FilterButton.defaultProps = {
  id: 0,
  active: false
};

export default FilterButton;
