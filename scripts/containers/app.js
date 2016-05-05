import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { setCategoryFilter } from '../actions/categories';
import { categoriesSelector, currentCategorySelector } from '../selectors/categories';
import CategoryFilter from '../components/category-filter';
import MapContainer from '../containers/map';
import ListContainer from '../containers/list';

const App = (props) => (
  <main>
    <nav>
      <CategoryFilter
        categories={props.categories}
        currentCategory={props.currentCategory}
        onClick={props.onCategoryFilterClick}
      />
    </nav>
    <MapContainer/>
    <ListContainer/>
  </main>
);

const mapStateToProps = (state) => ({
  categories: categoriesSelector(state),
  currentCategory: currentCategorySelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCategoryFilterClick: (id) => dispatch(setCategoryFilter(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
