import React, { Component, PropTypes } from 'react';

export default class FilterButton extends Component {
  render() {
    let classes = 'filter-button';

    if (this.props.active) {
      classes += ' filter-button--active';
    }

    if (this.props.disabled) {
      classes += ' filter-button--disabled';
    }

    return (
      <button
        type="button"
        className={classes}
        onClick={this.handleClick.bind(this)}
      >{this.props.label}</button>
    );
  }

  handleClick() {
    if (!this.props.disabled) {
      this.props.onClick(this.props.id, this.props.active);
    }
  }
}

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
