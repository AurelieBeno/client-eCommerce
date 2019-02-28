import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <nav>
        <form inline>
          <input
            type="text"
            placeholder="Search for items, brands, and inspiration"
          />
          <button>👓</button>
        </form>
      </nav>
    );
  }
}

export default SearchBar;
