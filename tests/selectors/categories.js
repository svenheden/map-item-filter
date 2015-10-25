import test from 'tape';
import {
  categoriesSelector,
  currentCategorySelector,
  subCategoriesSelector,
  activeSubCategoriesSelector
} from '../../scripts/selectors/categories';
import stateFixture from './fixture';

test('categoriesSelector', assert => {
  const actual = categoriesSelector(stateFixture);
  const expected = [{
    id: 0,
    label: 'Alla enheter',
    subCategories: []
  }, {
    id: 1,
    label: 'Kategori #1',
    subCategories: [
      {
        id: 2,
        label: 'Kategori #2'
      },{
        id: 3,
        label: 'Kategori #3'
      },{
        id: 4,
        label: 'Kategori #4'
      }
    ]}
  ];
  assert.deepEqual(actual, expected, 'should prepend the "all" category');

  assert.end();
});

test('currentCategorySelector', assert => {
  const state = Object.assign({}, stateFixture, {
    categoryFilter: 1
  });
  const actual = currentCategorySelector(state);
  const expected = {
    id: 1,
    label: 'Kategori #1',
    subCategories: [
      {
        id: 2,
        label: 'Kategori #2'
      },{
        id: 3,
        label: 'Kategori #3'
      },{
        id: 4,
        label: 'Kategori #4'
      }
    ]
  };
  assert.deepEqual(actual, expected, 'should return the category set as "current" in the state');

  assert.end();
});

test('subCategoriesSelector', assert => {
  const state = Object.assign({}, stateFixture, {
    categoryFilter: 1,
    subCategoryFilter: [3]
  });
  const actual = subCategoriesSelector(state);
  const expected = [
    {
      id: 2,
      label: 'Kategori #2',
      active: false
    },{
      id: 3,
      label: 'Kategori #3',
      active: true
    },{
      id: 4,
      label: 'Kategori #4',
      active: false
    }
  ];
  assert.deepEqual(actual, expected,
    'should return the sub categories that has the current category as parent and add the `active` flag to each sub category');

  assert.end();
});

test('activeSubCategoriesSelector', assert => {
  const state = Object.assign({}, stateFixture, {
    categoryFilter: 1,
    subCategoryFilter: [3,4]
  });
  const actual = activeSubCategoriesSelector(state);
  const expected = [
    {
      id: 3,
      label: 'Kategori #3',
      active: true
    },{
      id: 4,
      label: 'Kategori #4',
      active: true
    }
  ];
  assert.deepEqual(actual, expected, 'should return the active sub categories');

  assert.end();
});
