import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import once from 'lodash.once';
import App from './containers/App';
import reducers from './reducers';
import { setGoogleMapsAsLoaded } from './actions/map';

if (!window.__DATA__) {
  console.error(new Error('The initial state from the server is missing'));
}

let store = createStore(reducers, window.__DATA__);
let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);

/**
 * The global callback function that Google Maps is calling when their library has been loaded.
 */
window.initMap = once(() => { store.dispatch(setGoogleMapsAsLoaded()) });
