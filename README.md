# Map Item Filter

[![Build Status][travis-image]][travis-url]

This is a proof of concept of a single page application that can be used for filtering items by categories and/or by zooming and panning in a map.

The goal of this project is for me to try to recreate the core of an app I wrote a couple of years ago but with different technologies and a different architecture.

## Technologies used

* [React](https://facebook.github.io/react/) for UI components
* [Redux](https://github.com/rackt/redux) for holding the application state
    * [React Redux](https://github.com/rackt/react-redux) for binding the React components to the state
    * [Reselect](https://github.com/rackt/reselect) for creating memoized, composable selector functions that transforms the state for the components to use
* [Babel](https://babeljs.io) for transpiling the ES2015 and JSX syntax to ES5
* [Tape](https://github.com/substack/tape) for unit testing
* [Browserify](http://browserify.org) for bundling up the CommonJS style modules for browser usage
* [Sass](http://sass-lang.com/) for pre-processing the stylesheets

## How to build

1. Clone this repo
2. Install the required dependencies with `npm install`
3. Run `npm run build` to build the front end assets
4. Open index.html in your favorite browser

## License

MIT © [Jonathan Persson](https://github.com/jonathanp)

[travis-image]: https://travis-ci.org/jonathanp/map-item-filter.svg
[travis-url]: https://travis-ci.org/jonathanp/map-item-filter
