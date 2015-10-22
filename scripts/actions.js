export const SET_CATEGORY_FILTER       = 'SET_CATEGORY_FILTER';
export const ADD_SUB_CATEGORY_FILTER   = 'ADD_SUB_CATEGORY_FILTER';
export const CLEAR_CATEGORY_FILTER     = 'CLEAR_CATEGORY_FILTER';
export const CLEAR_SUB_CATEGORY_FILTER = 'CLEAR_SUB_CATEGORY_FILTER';
export const SET_ITEMS_VISIBLE_IN_MAP  = 'SET_ITEMS_VISIBLE_IN_MAP';
export const SET_GOOGLE_MAPS_AS_LOADED = 'SET_GOOGLE_MAPS_AS_LOADED';

export function setCategoryFilter(id) {
  return { type: SET_CATEGORY_FILTER, id };
}

export function addSubCategoryFilter(id) {
  return { type: ADD_SUB_CATEGORY_FILTER, id };
}

export function clearCategoryFilter() {
  return { type: CLEAR_CATEGORY_FILTER };
}

export function clearSubCategoryFilter(id) {
  return { type: CLEAR_SUB_CATEGORY_FILTER, id };
}

export function setItemsVisibleInMap(items) {
  return { type: SET_ITEMS_VISIBLE_IN_MAP, items };
}

export function setGoogleMapsAsLoaded() {
  return { type: SET_GOOGLE_MAPS_AS_LOADED };
}
