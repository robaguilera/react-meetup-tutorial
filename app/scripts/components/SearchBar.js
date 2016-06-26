import React from 'react';

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },
  render: function() {
    return (
      <div className="form-wrapper">
        <form>
          <label className="search-label">
            <input type="checkbox"
                   checked={this.props.inStockOnly}
                   ref="inStockOnlyInput"
                   onChange={this.handleChange}
            />
              Only show products in stock
              {' '}
          </label>
          <input type="text"
                 placeholder="Search..."
                 value={this.props.filterText}
                 ref="filterTextInput"
                 onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
});

export default SearchBar;