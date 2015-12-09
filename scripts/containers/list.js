import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setCategoryFilter, addSubCategoryFilter, clearSubCategoryFilter } from '../actions/categories';
import { currentCategorySelector, subCategoriesSelector } from '../selectors/categories';
import { filteredItemsSelector, visibleItemsSelector } from '../selectors/items';
import SubCategoryFilter from '../components/sub-category-filter';
import ItemList from '../components/item-list';

class ListContainer extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.category.id !== this.props.category.id) {
      ReactDOM.findDOMNode(this).scrollTop = 0;
    }
  }

  handleCategoryClick() {
    this.props.dispatch(setCategoryFilter(this.props.category.id));
  }

  handleSubCategoryClick(id, active) {
    if (active) {
      this.props.dispatch(clearSubCategoryFilter(id));
    } else {
      this.props.dispatch(addSubCategoryFilter(id));
    }
  }

  render() {
    return (
      <div className="list-container">
        {this.props.subCategories.length > 0 &&
          <SubCategoryFilter
            category={this.props.category}
            subCategories={this.props.subCategories}
            onClickCategory={() => this.handleCategoryClick()}
            onClickSubCategory={(id, active) => this.handleSubCategoryClick(id, active)}
          />
        }
        <ItemList items={this.props.googleMapsIsLoaded ? this.props.visibleItems : this.props.filteredItems}/>
      </div>
    );
  }
}

const select = (state) => ({
  category: currentCategorySelector(state),
  subCategories: subCategoriesSelector(state),
  filteredItems: filteredItemsSelector(state),
  visibleItems: visibleItemsSelector(state),
  googleMapsIsLoaded: state.googleMapsIsLoaded
});

export default connect(select)(ListContainer);
