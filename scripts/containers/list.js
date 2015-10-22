import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategoryFilter, addSubCategoryFilter, clearSubCategoryFilter } from '../actions';
import { selectCategory, selectSubCategories, selectFilteredItems, selectVisibleItems } from '../selectors';
import SubCategoryFilter from '../components/sub-category-filter';
import ItemList from '../components/item-list';

class ListContainer extends Component {
  render() {
    const {
      currentCategory,
      currentSubCategories,
      filteredItems,
      visibleItems,
      googleMapsIsLoaded
    } = this.props;

    return (
      <div className="list-container">
        {currentCategory && currentSubCategories &&
          <SubCategoryFilter
            category={currentCategory}
            subCategories={currentSubCategories}
            onClickCategory={this.onClickCategory.bind(this)}
            onClickSubCategory={this.onClickSubCategory.bind(this)}
          />
        }
        <ItemList items={googleMapsIsLoaded ? visibleItems : filteredItems}/>
      </div>
    );
  }

  onClickCategory() {
    this.props.dispatch(setCategoryFilter(this.props.currentCategory.id));
  }

  onClickSubCategory(id, active) {
    if (active) {
      this.props.dispatch(clearSubCategoryFilter(id));
    } else {
      this.props.dispatch(addSubCategoryFilter(id));
    }
  }
}

function select(state) {
  const currentCategory = selectCategory(state.allCategories, state.categoryFilter);

  return {
    currentCategory: currentCategory,
    currentSubCategories: selectSubCategories(currentCategory, state.subCategoryFilter),
    filteredItems: selectFilteredItems(state.allItems, state.categoryFilter, state.subCategoryFilter),
    visibleItems: selectVisibleItems(state.allItems, state.itemsVisibleInMap),
    googleMapsIsLoaded: state.googleMapsIsLoaded
  };
}

export default connect(select)(ListContainer);
