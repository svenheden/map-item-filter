import React, { Component, PropTypes } from 'react';

export default class CategoryFilterItem extends Component {
  render() {
    const classes = 'category-filter__link' + (this.props.selected ? ' category-filter__link--selected' : '');

    return (
      <a href="#" className={classes}>{this.props.label}</a>
    );
  }
}

CategoryFilterItem.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

CategoryFilterItem.defaultProps = {
  selected: false
};
