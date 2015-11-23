import React, { Component, PropTypes } from 'react';
import classNames from 'classnames-minimal';

export default class CategoryFilterItem extends Component {
  render() {
    const classes = classNames({
      'category-filter__link': true,
      'category-filter__link--selected': this.props.selected
    });

    return (
      <a
        href="#"
        className={classes}
        onClick={ev => this.handleClick(ev)}
      >{this.props.label}</a>
    );
  }

  handleClick(ev) {
    ev.preventDefault();

    if (!this.props.selected) {
      this.props.onClick(this.props.id);
    }
  }
}

CategoryFilterItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

CategoryFilterItem.defaultProps = {
  selected: false
};
