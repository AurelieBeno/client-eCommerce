import React, { Component } from "react";

import { NavLink, Link, Switch, Route } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap"

import "./Header.css";

import "./SearchBar.css";
import Clothing from "./Clothing";

class Header extends Component {
  render() {
    return (
      <div className="HeaderContainer ">
        <nav className="navbar container-fluide navbar-expand-lg navbar-dark bg-dark nav-container ">
          <Link className="navbar-brand logo-img" to="/">
            <img className="logo" src="../images/asos.png" alt="logo" />{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <NavLink className="nav-link link-woman" to="/women">
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-men " to="/men">
                  Men
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 form-container">
              <div className="searchInput-container container">
                <input
                  className=" form-control search-input mr-sm-2 searchBar col-12"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className=" btn btn-inline-success my-2 loupe my-sm-0"
                  type="submit"
                >
                  {" "}
                  <i class="fas fa-search" />
                </button>
              </div>
            </form>

            <button class="btn  my-2 my-sm-0" type="submit">
              <Link className="btn my-2 my-sm-0" to="/logOrSign">
                <i class="fas fa-user-circle" />
              </Link>
            </button>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Clothing />
          </div>
          <div />
        </nav>

        <Switch>
          <Route path="/clothing" component={Clothing} />
        </Switch>
      </div>
    );
  }
}

export default Header;
