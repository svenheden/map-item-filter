import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import CategoryFilterItem from '../components/category-filter-item';

const CategoryFilter = (props) => (
  <ul className="category-filter">
    {props.categories.map(category =>
      <li className="category-filter__item" key={category.id}>
        <CategoryFilterItem
          label={category.label}
          id={category.id}
          selected={category.id === props.currentCategory.id}
          onClick={props.onClick}
        />
      </li>
    )}
  </ul>
);

const categoryShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
});

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(categoryShape).isRequired,
  currentCategory: categoryShape.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CategoryFilter;
