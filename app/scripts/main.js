import React from 'react';
import ReactDOM from 'react-dom';
import Products from './inventory';
import FilterableProductTable from './components/FilterableProductTable';

ReactDOM.render(
  <FilterableProductTable products={Products} />,
  document.getElementById('App')
);