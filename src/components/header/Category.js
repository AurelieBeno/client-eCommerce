import React, { Component } from "react";

import "./Category.css";

import { Switch, Link, Route } from "react-router-dom";
import Clothing from "./Clothing";
import Shoes from "./Shoes";

class Category extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <nav class="navbar navbar-expand-lg navbar-dark primary-color">
        <a class="navbar-brand" href="#!">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#!">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#!">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
>>>>>>> c99424a7c4ac520c98e884d31deec4b036a7688c

      // <div>
      //   <nav className="Category">
      //     <ul>
      //       <button class="hover-button">
      //         <span class="hover-button--off">Clothing</span>
      //         <span class="hover-button--on">
      //           <div>
      //             <li key="CategoryClothes">
      //               <Link to="/clothing" />
      //             </li>
      //           </div>
      //         </span>
      //       </button>

      //       <button>
      //         Shoes
      //         <div>
      //           <li key="CategoryShoes">
      //             <Link to="/shoes" />
      //           </li>
      //         </div>
      //       </button>

      //       <Link to="#">Accessories</Link>

      //       <Link to="#">Activewear</Link>

      //       <Link to="#">Face + Body</Link>

      //       <Link to="#">Living + Gifts</Link>

      //       <Link to="#">Brands</Link>

      //       <Link to="#">Outlet</Link>

      //       <Link to="#">Marketplace</Link>

      //       <Link to="#">Inspiration</Link>
      //     </ul>
      //   </nav>
      //   <Switch>
      //     <Route path="/clothing" component={Clothing} />
      //     <Route path="/shoes" component={Shoes} />
      //   </Switch>
      // </div>
    );
  }
}

export default Category;
