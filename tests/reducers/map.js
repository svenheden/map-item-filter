import test from 'tape';
import { itemsVisibleInMap, googleMapsIsLoaded } from '../../scripts/reducers/map';
import { SET_ITEMS_VISIBLE_IN_MAP, SET_GOOGLE_MAPS_AS_LOADED } from '../../scripts/actions/map';

test('itemsVisibleInMap reducer', assert => {
  let actual, expected;

  actual = itemsVisibleInMap(undefined, {});
  expected = [];
  assert.deepEqual(actual, expected, 'should return the initial state');

  actual = itemsVisibleInMap(undefined, { type: SET_ITEMS_VISIBLE_IN_MAP, items: [2, 3] });
  expected = [2, 3];
  assert.deepEqual(actual, expected, 'should handle first SET_ITEMS_VISIBLE_IN_MAP action');

  actual = itemsVisibleInMap([2, 3], { type: SET_ITEMS_VISIBLE_IN_MAP, items: [3, 4] });
  expected = [3, 4];
  assert.deepEqual(actual, expected, 'should handle recurring SET_ITEMS_VISIBLE_IN_MAP actions');

  actual = itemsVisibleInMap(undefined, { type: SET_ITEMS_VISIBLE_IN_MAP, items: [] });
  expected = [];
  assert.deepEqual(actual, expected, 'should handle empty SET_ITEMS_VISIBLE_IN_MAP action');

  assert.end();
});

test('googleMapsIsLoaded reducer', assert => {
  let actual, expected;

  actual = googleMapsIsLoaded(undefined, {});
  expected = false;
  assert.equal(actual, expected, 'should return the initial state');

  actual = googleMapsIsLoaded(undefined, { type: SET_GOOGLE_MAPS_AS_LOADED });
  expected = true;
  assert.equal(actual, expected, 'should handle SET_GOOGLE_MAPS_AS_LOADED');

  assert.end();
});
