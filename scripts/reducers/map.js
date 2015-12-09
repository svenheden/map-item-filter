import { SET_ITEMS_VISIBLE_IN_MAP, SET_GOOGLE_MAPS_AS_LOADED } from '../actions/map';

export const itemsVisibleInMap = (state = [], action) => {
  switch (action.type) {
    case SET_ITEMS_VISIBLE_IN_MAP:
      return action.items;
    default:
      return state;
  }
};

export const googleMapsIsLoaded = (state = false, action) => {
  switch (action.type) {
    case SET_GOOGLE_MAPS_AS_LOADED:
      return true;
    default:
      return state;
  }
};
