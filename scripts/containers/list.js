import React, { Component } from 'react';
import SubCategoryFilter from '../components/sub-category-filter';
import ItemList from '../components/item-list';

export default class ListContainer extends Component {
  render() {
    return (
      <div className="list-container">
        {this.props.category && this.props.subCategories &&
          <SubCategoryFilter category={this.props.category} subCategories={this.props.subCategories}/>
        }
        <ItemList items={this.props.items}/>
      </div>
    );
  }
}
