import React, { Component, PropTypes } from 'react';
import CategoryFilterItem from '../components/category-filter-item';

export default class CategoryFilter extends Component {
  render() {
    const categories = [{
      id: 0,
      label: 'Alla enheter'
    }, ...this.props.categories];

    return (
      <ul className="category-filter">
        {categories.map(category =>
          <li className="category-filter__item" key={category.id}>
            <CategoryFilterItem
              label={category.label}
              id={category.id}
              selected={category.id === this.props.current.id}
              onClick={this.props.onClick}
            />
          </li>
        )}
      </ul>
    );
  }
}

const categoryShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
});

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(categoryShape).isRequired,
  current: categoryShape,
  onClick: PropTypes.func.isRequired
};

CategoryFilter.defaultProps = {
  current: {
    id: 0,
    label: 'Alla enheter'
  }
};
