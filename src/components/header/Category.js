import React, { Component } from "react";

import "./Category.css";

import { Switch, Link, Route } from "react-router-dom";
import Clothing from "./Clothing";
import Shoes from "./Shoes";

class Category extends Component {
  render() {
    return (
      <div>
        <nav className="Category">
          <ul>
            <button class="hover-button">
              <span class="hover-button--off">Clothing</span>
              <span class="hover-button--on">
                <div>
                  <li key="CategoryClothes">
                    <Link to="/clothing" />
                  </li>
                </div>
              </span>
            </button>

            <button>
              Shoes
              <div>
                <li key="CategoryShoes">
                  <Link to="/shoes" />
                </li>
              </div>
            </button>

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
          <Route path="/shoes" component={Shoes} />
        </Switch>
      </div>
    );
  }
}

export default Category;
