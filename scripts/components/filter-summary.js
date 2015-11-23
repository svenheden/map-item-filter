import React, { PropTypes } from 'react';
import Pill from '../components/pill';

const FilterSummary = props => {
  const matches = props.numberOfItems + (props.numberOfItems === 1 ? ' träff' : ' träffar');
  const hasCategory = props.category.id !== 0;
  const hasSubCategories = props.subCategories.length > 0;

  return (
    <div className="filter-summary">
      Visar {matches} {props.googleMapsIsLoaded ? 'inom det aktuella området på ' : 'på '}
      {props.subCategories.map(subCategory =>
        <Pill
          key={subCategory.id}
          id={subCategory.id}
          label={subCategory.label}
          tooltip={`Ta bort ${subCategory.label} från filtreringen`}
          onClick={() => props.onClickSubCategory(subCategory.id)}
        />
      )}
      {hasSubCategories && ' inom ' }
      {hasCategory &&
        <Pill
          id={props.category.id}
          label={props.category.label}
          tooltip={`Ta bort ${props.category.label} från filtreringen`}
          onClick={() => props.onClickCategory()}
        />
      }
      {!hasCategory && ' alla enheter'}
    </div>
  );
};

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

export default FilterSummary;
