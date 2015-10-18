import React, { Component, PropTypes } from 'react';
import Pill from '../components/pill';

export default class FilterSummary extends Component {
  render() {
    const results = `Visar ${this.props.numberOfItems} ${this.props.numberOfItems === 1 ? 'träff' : 'träffar'} på `;

    return (
      <div className="filter-summary">
        {results}
        <Pill id={2} label="Specialistpsykiatrisk"/>
        {' inom '}
        <Pill id={3} label="Psykiatri"/>
      </div>
    );
  }
}

const categoryShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
});

FilterSummary.propTypes = {
  category: categoryShape,
  subCategories: PropTypes.arrayOf(categoryShape),
  numberOfItems: PropTypes.number.isRequired
};
