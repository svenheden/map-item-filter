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
    const classes = 'sub-category-filter' + (this.state.visible ? ' sub-category-filter--visible' : '');

    return (
      <div className={classes}>
        <div className="sub-category-filter__inner">
          <div className="button-group">
            <FilterButton label={'Visa all ' + this.props.category.label}/>
          </div>

          <div className="button-group">
            {this.props.subCategories.map(category =>
              <FilterButton key={category.id} id={category.id} label={category.label}/>
            )}
          </div>
        </div>

        <button type="button" className="sub-category-filter__toggler" onClick={this.toggleVisibility.bind(this)}>Visa filtrering</button>
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
  subCategories: PropTypes.arrayOf(categoryShape).isRequired
};