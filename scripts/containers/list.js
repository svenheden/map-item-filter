import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { setCategoryFilter, addSubCategoryFilter, clearSubCategoryFilter } from '../actions/categories';
import { currentCategorySelector, subCategoriesSelector } from '../selectors/categories';
import { filteredItemsSelector, visibleItemsSelector } from '../selectors/items';
import SubCategoryFilter from '../components/sub-category-filter';
import ItemList from '../components/item-list';

const ListContainer = (props) => (
  <div className="list-container">
    {props.subCategories.length > 0 &&
      <SubCategoryFilter
        category={props.category}
        subCategories={props.subCategories}
        onClickCategory={() => handleCategoryClick(props)}
        onClickSubCategory={(id, active) => handleSubCategoryClick(props, id, active)}
      />
    }
    <ItemList items={props.googleMapsIsLoaded ? props.visibleItems : props.filteredItems}/>
  </div>
);

const handleCategoryClick = (props) => {
  props.dispatch(setCategoryFilter(props.category.id));
};

const handleSubCategoryClick = (props, id, active) => {
  if (active) {
    props.dispatch(clearSubCategoryFilter(id));
  } else {
    props.dispatch(addSubCategoryFilter(id));
  }
};

const select = (state) => ({
  category: currentCategorySelector(state),
  subCategories: subCategoriesSelector(state),
  filteredItems: filteredItemsSelector(state),
  visibleItems: visibleItemsSelector(state),
  googleMapsIsLoaded: state.googleMapsIsLoaded
});

export default connect(select)(ListContainer);
