import { combineReducers } from 'redux';
import { categoryFilter, subCategoryFilter } from './categories';
import { itemsVisibleInMap, googleMapsIsLoaded } from './map';

function allCategories(state = []) {
  return state;
}

function allItems(state = []) {
  return state;
}

const reducers = combineReducers({
  categoryFilter,
  subCategoryFilter,
  itemsVisibleInMap,
  googleMapsIsLoaded,
  allCategories,
  allItems
});

export default reducers;
