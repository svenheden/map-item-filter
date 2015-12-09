export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const setCategoryFilter = (id) => ({ type: SET_CATEGORY_FILTER, id });

export const CLEAR_CATEGORY_FILTER = 'CLEAR_CATEGORY_FILTER';
export const clearCategoryFilter = () => ({ type: CLEAR_CATEGORY_FILTER });

export const ADD_SUB_CATEGORY_FILTER = 'ADD_SUB_CATEGORY_FILTER';
export const addSubCategoryFilter = (id) => ({ type: ADD_SUB_CATEGORY_FILTER, id });

export const CLEAR_SUB_CATEGORY_FILTER = 'CLEAR_SUB_CATEGORY_FILTER';
export const clearSubCategoryFilter = (id) => ({ type: CLEAR_SUB_CATEGORY_FILTER, id });
