import { createSelector } from 'reselect';

export const categoriesSelector = state => [{ id: 0, label: 'Alla enheter', subCategories: []}, ...state.allCategories];
export const categoryFilterSelector = state => state.categoryFilter;
export const subCategoryFilterSelector = state => state.subCategoryFilter;

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
