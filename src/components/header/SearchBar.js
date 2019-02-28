import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="Search for items, brands, and inspiration" />
          <button>👓</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
