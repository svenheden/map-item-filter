import React, { Component, PropTypes } from 'react';
import Pill from '../components/pill';

export default class FilterSummary extends Component {
  render() {
    const matches = this.props.numberOfItems + (this.props.numberOfItems === 1 ? ' träff' : ' träffar');
    const hasBothCategoriesAndSubCategories = this.props.category && (this.props.subCategories.length > 0);

    return (
      <div className="filter-summary">
        Visar {matches} {this.props.googleMapsIsLoaded ? 'inom det aktuella området på ' : 'på '}
        {this.props.subCategories.map(subCategory =>
          <Pill
            key={subCategory.id}
            id={subCategory.id}
            label={subCategory.label}
            tooltip={`Ta bort ${subCategory.label} från filtreringen`}
            onClick={() => this.props.onClickSubCategory(subCategory.id)}
          />
        )}
        {hasBothCategoriesAndSubCategories && ' inom ' }
        {this.props.category &&
          <Pill
            id={this.props.category.id}
            label={this.props.category.label}
            tooltip={`Ta bort ${this.props.category.label} från filtreringen`}
            onClick={() => this.props.onClickCategory()}
          />
        }
        {!this.props.category &&
          ' alla enheter'
        }
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
  numberOfItems: PropTypes.number.isRequired,
  googleMapsIsLoaded: PropTypes.bool.isRequired,
  onClickCategory: PropTypes.func.isRequired,
  onClickSubCategory: PropTypes.func.isRequired
};
