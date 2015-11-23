import React, { Component, PropTypes } from 'react';
import classNames from 'classnames-minimal';

export default class FilterButton extends Component {
  render() {
    const classes = classNames({
      'filter-button': true,
      'filter-button--active': this.props.active,
      'filter-button--disabled': this.props.disabled
    });

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
