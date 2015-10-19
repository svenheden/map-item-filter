import React, { Component, PropTypes } from 'react';

export default class CategoryFilterItem extends Component {
  render() {
    let classes = 'category-filter__link';

    if (this.props.selected) {
      classes += ' category-filter__link--selected';
    }

    return (
      <a
        href="#"
        className={classes}
        onClick={this.handleClick.bind(this)}
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
