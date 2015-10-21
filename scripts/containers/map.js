import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCategoryFilter, clearSubCategoryFilter, setItemsInMapView } from '../actions';
import { selectFilteredItems, selectCategory, selectActiveSubCategories } from '../selectors';
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
        <Map items={visibleItems} onBoundsChange={(items) => dispatch(setItemsInMapView(items))}/>
      </div>
    );
  }
}

function select(state) {
  const currentCategory = selectCategory(state.allCategories, state.categoryFilter);

  return {
    currentCategory: currentCategory,
    currentSubCategories: selectActiveSubCategories(currentCategory, state.subCategoryFilter),
    visibleItems: selectFilteredItems(state.allItems, state.categoryFilter, state.subCategoryFilter)
  };
}

export default connect(select)(MapContainer);
