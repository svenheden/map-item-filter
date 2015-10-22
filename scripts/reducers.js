import { combineReducers } from 'redux';
import {
  SET_CATEGORY_FILTER,
  ADD_SUB_CATEGORY_FILTER,
  CLEAR_CATEGORY_FILTER,
  CLEAR_SUB_CATEGORY_FILTER,
  SET_ITEMS_VISIBLE_IN_MAP,
  SET_GOOGLE_MAPS_AS_LOADED
} from './actions';

function categoryFilter(state = 0, action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.id;
    case CLEAR_CATEGORY_FILTER:
      return 0;
    default:
      return state;
  }
}

function subCategoryFilter(state = [], action) {
  switch (action.type) {
    case ADD_SUB_CATEGORY_FILTER:
      return [...state, action.id];
    case CLEAR_SUB_CATEGORY_FILTER:
      return state.filter(id => id !== action.id);
    case SET_CATEGORY_FILTER:
    case CLEAR_CATEGORY_FILTER:
      return [];
    default:
      return state;
  }
}

function itemsVisibleInMap(state = [], action) {
  switch (action.type) {
    case SET_ITEMS_VISIBLE_IN_MAP:
      return action.items;
    default:
      return state;
  }
}

function googleMapsIsLoaded(state = false, action) {
  switch (action.type) {
    case SET_GOOGLE_MAPS_AS_LOADED:
      return true;
    default:
      return state;
  }
}

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
