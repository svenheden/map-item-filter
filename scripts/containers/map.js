import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { clearCategoryFilter, clearSubCategoryFilter } from '../actions/categories';
import { setItemsVisibleInMap } from '../actions/map';
import { currentCategorySelector, activeSubCategoriesSelector } from '../selectors/categories';
import { filteredItemsSelector, visibleItemsSelector } from '../selectors/items';
import FilterSummary from '../components/filter-summary';
import Map from '../components/map';

const MapContainer = (props) => (
  <div className="map-container">
    <FilterSummary
      category={props.category}
      subCategories={props.subCategories}
      numberOfItems={props.googleMapsIsLoaded ? props.visibleItems.length : props.filteredItems.length}
      googleMapsIsLoaded={props.googleMapsIsLoaded}
      onClickCategory={() => props.dispatch(clearCategoryFilter())}
      onClickSubCategory={(id) => props.dispatch(clearSubCategoryFilter(id))}
    />
    {props.googleMapsIsLoaded &&
      <Map
        items={props.filteredItems}
        onVisibleItemsChange={(items) => props.dispatch(setItemsVisibleInMap(items))}
      />
    }
  </div>
);

const select = (state) => ({
  category: currentCategorySelector(state),
  subCategories: activeSubCategoriesSelector(state),
  filteredItems: filteredItemsSelector(state),
  visibleItems: visibleItemsSelector(state),
  googleMapsIsLoaded: state.googleMapsIsLoaded
});

export default connect(select)(MapContainer);
