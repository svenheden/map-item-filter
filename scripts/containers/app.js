import React, { Component } from 'react';
import CategoryFilter from '../components/category-filter';
import MapContainer from '../containers/map';
import ListContainer from '../containers/list';

import * as test from '../testdata';

export default class App extends Component {
  render() {
    return (
      <main>
        <nav>
          <CategoryFilter categories={test.categories} current={test.currentCategory}/>
        </nav>
        <MapContainer category={test.currentCategory} subCategories={test.subCategories} items={test.items}/>
        <ListContainer category={test.currentCategory} subCategories={test.subCategories} items={test.items}/>
      </main>
    );
  }
}
