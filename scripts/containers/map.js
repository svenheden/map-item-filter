import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCategoryFilter, clearSubCategoryFilter } from '../actions';
import { selectCategory, selectActiveSubCategories } from '../selectors';
import FilterSummary from '../components/filter-summary';
import Map from '../components/map';

class MapContainer extends Component {
  render() {
    const { dispatch, currentCategory, currentSubCategories, visibleItems } = this.props;

    return (
      <div className="map-container">
        <FilterSummary
          category={currentCategory}
          subCategories={currentSubCategories}
          numberOfItems={visibleItems.length}
          onClickCategory={() => dispatch(clearCategoryFilter())}
          onClickSubCategory={(id) => dispatch(clearSubCategoryFilter(id))}
        />
        <Map/>
      </div>
    );
  }
}

function select(state) {
  const currentCategory = selectCategory(state.allCategories, state.categoryFilter);

  return {
    currentCategory: currentCategory,
    currentSubCategories: selectActiveSubCategories(currentCategory, state.subCategoryFilter),
    visibleItems: state.allItems
  };
}

export default connect(select)(MapContainer);
