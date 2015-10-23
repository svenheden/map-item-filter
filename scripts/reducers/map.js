import { SET_ITEMS_VISIBLE_IN_MAP, SET_GOOGLE_MAPS_AS_LOADED } from '../actions/map';

export function itemsVisibleInMap(state = [], action) {
  switch (action.type) {
    case SET_ITEMS_VISIBLE_IN_MAP:
      return action.items;
    default:
      return state;
  }
}

export function googleMapsIsLoaded(state = false, action) {
  switch (action.type) {
    case SET_GOOGLE_MAPS_AS_LOADED:
      return true;
    default:
      return state;
  }
}
