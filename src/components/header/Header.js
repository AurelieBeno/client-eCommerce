import React, { Component } from "react";

import { Switch, Route, NavLink } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap"

import Women from "./Women";
import SearchBar from "./SearchBar";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            <img className="logo" src="../images/asos.png" alt="logo" />{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <NavLink className="nav-link" to="/women">
                  Women
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/men">
                  Men
                </NavLink>
              </li>
              <li class="nav-item nav-input">
                <SearchBar />
              </li>
            </ul>
          </div>

          {/* <div className="nav-container">
          <img className="logo" src="../images/asos.png" alt="logo" />

          <ul className="headerListContainer">
            <li>
              <NavLink className="a" to="/women">
                WOMEN
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className="a" to="/men">
                MEN
              </NavLink>
            </li>
          </ul>

          <div className="searchBar">
            <SearchBar />
          </div> */}
          {/* </div> */}
        </nav>
        <Switch>
          <Route path="/women" component={Women} />
        </Switch>
      </div>
    );
  }
}

export default Header;