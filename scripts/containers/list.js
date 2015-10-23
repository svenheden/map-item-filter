import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategoryFilter, addSubCategoryFilter, clearSubCategoryFilter } from '../actions/categories';
import { currentCategorySelector, subCategoriesSelector } from '../selectors/categories';
import { filteredItemsSelector, visibleItemsSelector } from '../selectors/items';
import SubCategoryFilter from '../components/sub-category-filter';
import ItemList from '../components/item-list';

class ListContainer extends Component {
  render() {
    const {
      category,
      subCategories,
      filteredItems,
      visibleItems,
      googleMapsIsLoaded
    } = this.props;

    return (
      <div className="list-container">
        {subCategories.length > 0 &&
          <SubCategoryFilter
            category={category}
            subCategories={subCategories}
            onClickCategory={this.onClickCategory.bind(this)}
            onClickSubCategory={this.onClickSubCategory.bind(this)}
          />
        }
        <ItemList items={googleMapsIsLoaded ? visibleItems : filteredItems}/>
      </div>
    );
  }

  onClickCategory() {
    this.props.dispatch(setCategoryFilter(this.props.category.id));
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
  return {
    category: currentCategorySelector(state),
    subCategories: subCategoriesSelector(state),
    filteredItems: filteredItemsSelector(state),
    visibleItems: visibleItemsSelector(state),
    googleMapsIsLoaded: state.googleMapsIsLoaded
  };
}

export default connect(select)(ListContainer);
