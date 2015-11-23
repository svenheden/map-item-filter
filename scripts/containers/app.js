import React from 'react';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../actions/categories';
import { categoriesSelector, currentCategorySelector } from '../selectors/categories';
import CategoryFilter from '../components/category-filter';
import MapContainer from '../containers/map';
import ListContainer from '../containers/list';

const App = props => {
  return (
    <main>
      <nav>
        <CategoryFilter
          categories={props.categories}
          currentCategory={props.currentCategory}
          onClick={id => props.dispatch(setCategoryFilter(id))}
        />
      </nav>
      <MapContainer/>
      <ListContainer/>
    </main>
  );
};

function select(state) {
  return {
    categories: categoriesSelector(state),
    currentCategory: currentCategorySelector(state)
  };
}

export default connect(select)(App);
