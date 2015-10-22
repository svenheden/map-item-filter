export function selectCategory(categories, currentCategoryFilter) {
  if (currentCategoryFilter) {
    return categories.find(category => category.id === currentCategoryFilter);
  }
}

export function selectSubCategories(currentCategory, currentSubCategoryFilter) {
  if (!currentCategory) {
    return [];
  }

  return currentCategory.subCategories
    .map(category => {
      return Object.assign({}, category, {
        active: currentSubCategoryFilter.indexOf(category.id) !== -1
      });
    });
}

export function selectActiveSubCategories(currentCategory, currentSubCategoryFilter) {
  return selectSubCategories(currentCategory, currentSubCategoryFilter)
    .filter(category => category.active);
}

export function selectFilteredItems(items, categoryFilter, subCategoryFilter) {
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

export function selectVisibleItems(items, itemsVisibleInMap) {
  return items.filter(item => itemsVisibleInMap.indexOf(item.id) !== -1);
}
