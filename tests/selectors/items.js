import test from 'tape';
import { filteredItemsSelector, visibleItemsSelector } from '../../scripts/selectors/items';
import stateFixture from './fixture';

test('filteredItemsSelector', assert => {
  let state, actual, expected;

  state = Object.assign({}, stateFixture, {
    categoryFilter: 0,
    subCategoryFilter: []
  });
  actual = filteredItemsSelector(state);
  expected = [
    {
      "id": 1,
      "heading": "Foo",
      "categories": [
        1,
        2,
        3
      ],
      "address": [
        "Foobarvägen 4",
        "121 87 Enskededalen"
      ],
      "phone": "08-380 102 90",
      "location": {
        "lat": "59.364132",
        "lng": "18.157432"
      }
    },
    {
      "id": 2,
      "heading": "Bar",
      "categories": [
        1,
        2
      ],
      "address": [
        "Foobargatan 35A",
        "171 71 Solna"
      ],
      "phone": "08-250 209 80",
      "location": {
        "lat": "57.494632",
        "lng": "12.018908"
      }
    },
    {
      "id": 3,
      "heading": "Baz",
      "categories": [
        1,
        4
      ],
      "address": [
        "Bargatan 9",
        "803 20 Gävle"
      ],
      "phone": "031-124 65 65",
      "location": {
        "lat": "59.312625",
        "lng": "18.150867"
      }
    }
  ];
  assert.deepEqual(actual, expected, 'should return all items if no category is active');

  state = Object.assign({}, stateFixture, {
    categoryFilter: 1,
    subCategoryFilter: []
  });
  actual = filteredItemsSelector(state);
  expected = [
    {
      "id": 1,
      "heading": "Foo",
      "categories": [
        1,
        2,
        3
      ],
      "address": [
        "Foobarvägen 4",
        "121 87 Enskededalen"
      ],
      "phone": "08-380 102 90",
      "location": {
        "lat": "59.364132",
        "lng": "18.157432"
      }
    },
    {
      "id": 2,
      "heading": "Bar",
      "categories": [
        1,
        2
      ],
      "address": [
        "Foobargatan 35A",
        "171 71 Solna"
      ],
      "phone": "08-250 209 80",
      "location": {
        "lat": "57.494632",
        "lng": "12.018908"
      }
    },
    {
      "id": 3,
      "heading": "Baz",
      "categories": [
        1,
        4
      ],
      "address": [
        "Bargatan 9",
        "803 20 Gävle"
      ],
      "phone": "031-124 65 65",
      "location": {
        "lat": "59.312625",
        "lng": "18.150867"
      }
    }
  ];
  assert.deepEqual(actual, expected, 'should return all items that belongs to the currently active category');

  state = Object.assign({}, stateFixture, {
    categoryFilter: 1,
    subCategoryFilter: [4]
  });
  actual = filteredItemsSelector(state);
  expected = [
    {
      "id": 3,
      "heading": "Baz",
      "categories": [
        1,
        4
      ],
      "address": [
        "Bargatan 9",
        "803 20 Gävle"
      ],
      "phone": "031-124 65 65",
      "location": {
        "lat": "59.312625",
        "lng": "18.150867"
      }
    }
  ];
  assert.deepEqual(actual, expected, 'should return all items that belongs to the currently active sub category');

  assert.end();
});

test('visibleItemsSelector', assert => {
  let state, actual, expected;

  state = Object.assign({}, stateFixture, {
    itemsVisibleInMap: [1, 2]
  });
  actual = visibleItemsSelector(state);
  expected = [
    {
      "id": 1,
      "heading": "Foo",
      "categories": [
        1,
        2,
        3
      ],
      "address": [
        "Foobarvägen 4",
        "121 87 Enskededalen"
      ],
      "phone": "08-380 102 90",
      "location": {
        "lat": "59.364132",
        "lng": "18.157432"
      }
    },
    {
      "id": 2,
      "heading": "Bar",
      "categories": [
        1,
        2
      ],
      "address": [
        "Foobargatan 35A",
        "171 71 Solna"
      ],
      "phone": "08-250 209 80",
      "location": {
        "lat": "57.494632",
        "lng": "12.018908"
      }
    }
  ];
  assert.deepEqual(actual, expected,
    'should return all items that exists in the `itemsVisibleInMap` array in the state');

  state = Object.assign({}, stateFixture, {
    itemsVisibleInMap: []
  });
  actual = visibleItemsSelector(state);
  expected = [];
  assert.deepEqual(actual, expected,
    'should return an empty array if the `itemsVisibleInMap` array in the state is empty');

  assert.end();
});
