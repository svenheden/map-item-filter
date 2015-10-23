import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../actions';
import { categoriesSelector, currentCategorySelector } from '../selectors';
import CategoryFilter from '../components/category-filter';
import MapContainer from '../containers/map';
import ListContainer from '../containers/list';

class App extends Component {
  render() {
    const { dispatch, categories, currentCategory } = this.props;

    return (
      <main>
        <nav>
          <CategoryFilter
            categories={categories}
            currentCategory={currentCategory}
            onClick={id => dispatch(setCategoryFilter(id))}
          />
        </nav>
        <MapContainer/>
        <ListContainer/>
      </main>
    );
  }
}

function select(state) {
  return {
    categories: categoriesSelector(state),
    currentCategory: currentCategorySelector(state)
  };
}

export default connect(select)(App);
