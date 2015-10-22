import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCategoryFilter, clearSubCategoryFilter, setItemsVisibleInMap } from '../actions';
import { selectCategory, selectActiveSubCategories, selectFilteredItems, selectVisibleItems } from '../selectors';
import FilterSummary from '../components/filter-summary';
import Map from '../components/map';

class MapContainer extends Component {
  render() {
    const { dispatch, currentCategory, currentSubCategories, filteredItems, visibleItems, googleMapsIsLoaded } = this.props;

    return (
      <div className="map-container">
        <FilterSummary
          category={currentCategory}
          subCategories={currentSubCategories}
          numberOfItems={visibleItems.length}
          onClickCategory={() => dispatch(clearCategoryFilter())}
          onClickSubCategory={(id) => dispatch(clearSubCategoryFilter(id))}
        />
        { googleMapsIsLoaded &&
          <Map items={filteredItems} onBoundsChange={(items) => dispatch(setItemsVisibleInMap(items))}/>
        }
      </div>
    );
  }
}

function select(state) {
  const currentCategory = selectCategory(state.allCategories, state.categoryFilter);

  return {
    currentCategory: currentCategory,
    currentSubCategories: selectActiveSubCategories(currentCategory, state.subCategoryFilter),
    filteredItems: selectFilteredItems(state.allItems, state.categoryFilter, state.subCategoryFilter),
    visibleItems: selectVisibleItems(state.allItems, state.itemsVisibleInMap),
    googleMapsIsLoaded: state.googleMapsIsLoaded
  };
}

export default connect(select)(MapContainer);
