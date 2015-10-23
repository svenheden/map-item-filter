import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCategoryFilter, clearSubCategoryFilter } from '../actions/categories';
import { setItemsVisibleInMap } from '../actions/map';
import { currentCategorySelector, activeSubCategoriesSelector } from '../selectors/categories';
import { filteredItemsSelector, visibleItemsSelector } from '../selectors/items';
import FilterSummary from '../components/filter-summary';
import Map from '../components/map';

class MapContainer extends Component {
  render() {
    const {
      dispatch,
      category,
      subCategories,
      filteredItems,
      visibleItems,
      googleMapsIsLoaded
    } = this.props;

    return (
      <div className="map-container">
        <FilterSummary
          category={category}
          subCategories={subCategories}
          numberOfItems={googleMapsIsLoaded ? visibleItems.length : filteredItems.length}
          googleMapsIsLoaded={googleMapsIsLoaded}
          onClickCategory={() => dispatch(clearCategoryFilter())}
          onClickSubCategory={(id) => dispatch(clearSubCategoryFilter(id))}
        />
        { googleMapsIsLoaded &&
          <Map
            items={filteredItems}
            onVisibleItemsChange={(items) => dispatch(setItemsVisibleInMap(items))}
          />
        }
      </div>
    );
  }
}

function select(state) {
  return {
    category: currentCategorySelector(state),
    subCategories: activeSubCategoriesSelector(state),
    filteredItems: filteredItemsSelector(state),
    visibleItems: visibleItemsSelector(state),
    googleMapsIsLoaded: state.googleMapsIsLoaded
  };
}

export default connect(select)(MapContainer);
