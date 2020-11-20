import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$.get('/products/44/reviews', (product) => {
  console.log(product);
  ReactDOM.render(<App product={product} />, document.getElementById('app'));
});