import React, { Component } from "react";

import { Switch, Route, NavLink } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap"

import Women from "./Women";
import Men from "./Men";

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
              <li class="nav-item">
                <NavLink className="nav-link" to="/women">
                  Femme
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/men">
                  Homme
                </NavLink>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="#!">
                Clothing
              </a>
              <a class="nav-item nav-link" href="#!">
                Shoes
              </a>
              <a class="nav-item nav-link" href="#!">
                Accessories
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
