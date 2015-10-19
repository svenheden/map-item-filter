import React, { Component, PropTypes } from 'react';
import FilterButton from '../components/filter-button';

export default class SubCategoryFilter extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const hasActiveSubCategories = (this.props.subCategories.filter(cat => cat.active).length > 0);
    let classes = 'sub-category-filter';

    if (this.state.visible) {
      classes += ' sub-category-filter--visible';
    }

    return (
      <div className={classes}>
        <div className="sub-category-filter__inner">
          <div className="button-group">
            <FilterButton
              label={'Visa all ' + this.props.category.label}
              active={!hasActiveSubCategories}
              disabled={!hasActiveSubCategories}
              onClick={this.props.onClickCategory}
            />
          </div>

          <div className="button-group">
            {this.props.subCategories.map(category =>
              <FilterButton
                key={category.id}
                id={category.id}
                label={category.label}
                active={category.active}
                onClick={this.props.onClickSubCategory}
              />
            )}
          </div>
        </div>

        <button
          type="button"
          className="sub-category-filter__toggler"
          onClick={this.toggleVisibility.bind(this)}
        >Visa filtrering</button>
      </div>
    );
  }
}

const categoryShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
});

SubCategoryFilter.propTypes = {
  category: categoryShape.isRequired,
  subCategories: PropTypes.arrayOf(categoryShape).isRequired,
  onClickCategory: PropTypes.func.isRequired,
  onClickSubCategory: PropTypes.func.isRequired
};
