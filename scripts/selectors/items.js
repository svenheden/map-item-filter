import { createSelector } from 'reselect';
import { categoryFilterSelector, subCategoryFilterSelector } from './categories';

const itemsSelector = state => state.allItems;
const itemsVisibleInMapSelector = state => state.itemsVisibleInMap;

export const filteredItemsSelector = createSelector(
  itemsSelector,
  categoryFilterSelector,
  subCategoryFilterSelector,
  (items, categoryFilter, subCategoryFilter) => {
    const filterByCategory = item => item.categories.indexOf(categoryFilter) !== -1;
    const filterBySubCategory = item => item.categories.some(cat => subCategoryFilter.indexOf(cat) !== -1);

    if (subCategoryFilter.length > 0) {
      return items.filter(filterBySubCategory);
    }

    if (categoryFilter) {
      return items.filter(filterByCategory);
    }

    return items;
  }
);

export const visibleItemsSelector = createSelector(
  itemsSelector,
  itemsVisibleInMapSelector,
  (items, itemsVisibleInMap) => items.filter(item => itemsVisibleInMap.indexOf(item.id) !== -1)
);
