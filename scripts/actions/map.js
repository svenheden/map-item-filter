export const SET_ITEMS_VISIBLE_IN_MAP  = 'SET_ITEMS_VISIBLE_IN_MAP';
export const SET_GOOGLE_MAPS_AS_LOADED = 'SET_GOOGLE_MAPS_AS_LOADED';

export function setItemsVisibleInMap(items) {
  return { type: SET_ITEMS_VISIBLE_IN_MAP, items };
}

export function setGoogleMapsAsLoaded() {
  return { type: SET_GOOGLE_MAPS_AS_LOADED };
}
