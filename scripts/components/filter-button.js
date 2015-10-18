import React, { Component, PropTypes } from 'react';

export default class FilterButton extends Component {
  // @todo remove state. it's only here temporary to be able to test the GUI
  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const classes = 'filter-button' + (this.state.active ? ' filter-button--active' : '');

    return (
      <button type="button" className={classes} onClick={this.toggle.bind(this)}>{this.props.label}</button>
    );
  }
}

FilterButton.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool
};

FilterButton.defaultProps = {
  id: 0,
  active: false
};
