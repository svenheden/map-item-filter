import {
  SET_CATEGORY_FILTER,
  ADD_SUB_CATEGORY_FILTER,
  CLEAR_CATEGORY_FILTER,
  CLEAR_SUB_CATEGORY_FILTER
} from '../actions/categories';

export function categoryFilter(state = 0, action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.id;
    case CLEAR_CATEGORY_FILTER:
      return 0;
    default:
      return state;
  }
}

export function subCategoryFilter(state = [], action) {
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
