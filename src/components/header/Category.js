import React, { Component } from "react";
import { Link } from "react-router-dom";
import Clothing from "./Clothing";

class Category extends Component {
  render() {
    return (
      <nav className="Category">
        <ul>
          <li key="CategoryList">
            <Link to="#">New in</Link>

            <button>
              {/* <Clothing /> */}
              Clothing
            </button>

            <button>Shoes</button>

            <Link to="#">Accessories</Link>

            <Link to="#">Activewear</Link>

            <Link to="#">Face + Body</Link>

            <Link to="#">Living + Gifts</Link>

            <Link to="#">Brands</Link>

            <Link to="#">Outlet</Link>

            <Link to="#">Marketplace</Link>

            <Link to="#">Inspiration</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Category;
