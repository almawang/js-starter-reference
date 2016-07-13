import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  // add this above your render method
  onInputChange(event) {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(this.state.searchterm);
    console.log(event.target.value);
  }
  render() {
    return (
      <div id="search-bar">
        <input onChange={this.onInputChange} value={this.state.searchterm} />
      </div>
    );
  }
}

export default SearchBar;
