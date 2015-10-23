import { createSelector } from 'reselect';

export const categoriesSelector = state => [{ id: 0, label: 'Alla enheter', subCategories: []}, ...state.allCategories];
const itemsSelector = state => state.allItems;
const categoryFilterSelector = state => state.categoryFilter;
const subCategoryFilterSelector = state => state.subCategoryFilter;
const itemsVisibleInMapSelector = state => state.itemsVisibleInMap;

export const currentCategorySelector = createSelector(
  categoriesSelector,
  categoryFilterSelector,
  (categories, categoryFilter) => categories.find(category => category.id === categoryFilter)
);

export const subCategoriesSelector = createSelector(
  currentCategorySelector,
  subCategoryFilterSelector,
  (category, subCategoryFilter) => {
    return category.subCategories
      .map(subCategory => {
        return Object.assign({}, subCategory, {
          active: subCategoryFilter.indexOf(subCategory.id) !== -1
        });
      });
  }
);

export const activeSubCategoriesSelector = createSelector(
  subCategoriesSelector,
  (subCategories) => subCategories.filter(category => category.active)
);

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
