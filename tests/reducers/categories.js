import test from 'tape';
import { categoryFilter, subCategoryFilter } from '../../scripts/reducers/categories';
import {
  SET_CATEGORY_FILTER,
  CLEAR_CATEGORY_FILTER,
  ADD_SUB_CATEGORY_FILTER,
  CLEAR_SUB_CATEGORY_FILTER
} from '../../scripts/actions/categories';

test('categoryFilter reducer', assert => {
  let actual, expected;

  actual = categoryFilter(undefined, {});
  expected = 0;
  assert.equal(actual, expected, 'should return the initial state');

  actual = categoryFilter(undefined, { type: SET_CATEGORY_FILTER, id: 2 });
  expected = 2;
  assert.equal(actual, expected, 'should handle first SET_CATEGORY_FILTER action');

  actual = categoryFilter(2, { type: SET_CATEGORY_FILTER, id: 3 });
  expected = 3;
  assert.equal(actual, expected, 'should handle recurring SET_CATEGORY_FILTER actions');

  actual = categoryFilter(2, { type: CLEAR_CATEGORY_FILTER });
  expected = 0;
  assert.equal(actual, expected, 'should handle CLEAR_CATEGORY_FILTER action');

  assert.end();
});

test('subCategoryFilter reducer', assert => {
  let actual, expected;

  actual = subCategoryFilter(undefined, {});
  expected = [];
  assert.deepEqual(actual, expected, 'should return the initial state');

  actual = subCategoryFilter(undefined, { type: ADD_SUB_CATEGORY_FILTER, id: 2 });
  expected = [2];
  assert.deepEqual(actual, expected, 'should handle first ADD_SUB_CATEGORY_FILTER action');

  actual = subCategoryFilter([2], { type: ADD_SUB_CATEGORY_FILTER, id: 3 });
  expected = [2, 3];
  assert.deepEqual(actual, expected, 'should handle recurring ADD_SUB_CATEGORY_FILTER actions');

  actual = subCategoryFilter([2, 3], { type: CLEAR_SUB_CATEGORY_FILTER, id: 2 });
  expected = [3];
  assert.deepEqual(actual, expected, 'should handle CLEAR_SUB_CATEGORY_FILTER action');

  actual = subCategoryFilter([2], { type: SET_CATEGORY_FILTER, id: 3 });
  expected = [];
  assert.deepEqual(actual, expected, 'should handle SET_CATEGORY_FILTER action');

  actual = subCategoryFilter([2], { type: CLEAR_CATEGORY_FILTER });
  expected = [];
  assert.deepEqual(actual, expected, 'should handle CLEAR_CATEGORY_FILTER action');

  assert.end();
});
