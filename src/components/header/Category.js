import React, { Component } from "react";

import "./Category.css";

import { Switch, Link, Route } from "react-router-dom";
import Clothing from "./Clothing";

class Category extends Component {
  render() {
    return (
      <div>
        <nav className="Category">
          <ul>
            <button class="hover-button">
              <span class="hover-button--off">Clothing</span>
              <div class="hover-button--on">
                <div>
                  <li key="CategoryList">
                    <Link to="/clothing" />
                  </li>
                </div>
              </div>
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
          </ul>
        </nav>
        <Switch>
          <Route path="/clothing" component={Clothing} />
        </Switch>
      </div>
    );
  }
}

export default Category;
