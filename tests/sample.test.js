import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/components/App.jsx';

var sum = (a, b) => a + b;
it('should and 1 and 1 correctly', () => {
  expect(sum(1, 1)).toBe(2);
});

let fakeProduct = {
  rating_categories: [],
  reviews: [
    {
      username: 'humpty.dumpty'
    }
  ]
};

it('should render main component correctly', () => {
  var test = renderer
    .create(<App product={fakeProduct} />)
    .toJSON();
  expect(test).toMatchSnapshot();
});