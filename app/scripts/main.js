import React from 'react';
import ReactDOM from 'react-dom';
import Products from './inventory';

var ProductCategoryRow = React.createClass({
  render: function() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );

  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

var Searchbar = React.createClass({
  render: function() {
    return (
      <div className="form-wrapper">
        <form>
          <label className="search-label">
            <input type="checkbox"/>
              Only show products in stock
              {' '}
          </label>
          <input type="text" placeholder="Search..."/>
        </form>
      </div>
    )
  }
});

var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <Searchbar />
        <ProductTable products={this.props.products}/>
      </div>
    );
  }
});

ReactDOM.render(
  <FilterableProductTable products={Products} />,
  document.getElementById('App')
);