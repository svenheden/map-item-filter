export const SET_CATEGORY_FILTER       = 'SET_CATEGORY_FILTER';
export const ADD_SUB_CATEGORY_FILTER   = 'ADD_SUB_CATEGORY_FILTER';
export const CLEAR_CATEGORY_FILTER     = 'CLEAR_CATEGORY_FILTER';
export const CLEAR_SUB_CATEGORY_FILTER = 'CLEAR_SUB_CATEGORY_FILTER';
export const SET_ITEMS_IN_MAP_VIEW     = 'SET_ITEMS_IN_MAP_VIEW';

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

export function setItemsInMapView(items) {
  console.log('setItemsInMapView', items);
  return { type: SET_ITEMS_IN_MAP_VIEW, items };
}
