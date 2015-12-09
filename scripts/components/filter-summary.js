import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Pill from '../components/pill';

const FilterSummary = (props) => (
  <div className="filter-summary">
    {renderNumberOfMatches(props)}
    {renderSubCategories(props)}
    {renderCategory(props)}
  </div>
);

const renderNumberOfMatches = (props) => (
  'Visar ' + props.numberOfItems +
    (props.numberOfItems === 1
      ? ' träff'
      : ' träffar' ) +
    (props.googleMapsIsLoaded
      ? ' inom det aktuella området på '
      : ' på ')
);

const renderSubCategories = (props) => {
  if (props.subCategories.length > 0) {
    return props.subCategories.map(subCategory =>
      <Pill
        key={subCategory.id}
        id={subCategory.id}
        label={subCategory.label}
        tooltip={`Ta bort ${subCategory.label} från filtreringen`}
        onClick={() => props.onClickSubCategory(subCategory.id)}
      />
    ).concat(' inom ');
  }
};

const renderCategory = (props) => {
  if (props.category.id !== 0) {
    return (
      <Pill
        id={props.category.id}
        label={props.category.label}
        tooltip={`Ta bort ${props.category.label} från filtreringen`}
        onClick={() => props.onClickCategory()}
      />
    );
  } else {
    return ' alla enheter';
  }
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
