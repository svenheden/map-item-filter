import { combineReducers } from 'redux';
import { categoryFilter, subCategoryFilter } from './categories';
import { itemsVisibleInMap, googleMapsIsLoaded } from './map';

const allCategories = (state = []) => state;
const allItems = (state = []) => state;

const reducers = combineReducers({
  categoryFilter,
  subCategoryFilter,
  itemsVisibleInMap,
  googleMapsIsLoaded,
  allCategories,
  allItems
});

export default reducers;
