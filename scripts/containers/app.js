import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../actions';
import { selectCategory } from '../selectors';
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
            current={currentCategory}
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
    categories: state.allCategories,
    currentCategory: selectCategory(state.allCategories, state.categoryFilter)
  };
}

export default connect(select)(App);
