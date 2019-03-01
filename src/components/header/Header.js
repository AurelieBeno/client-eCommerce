import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap"

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img className="logo" src="../images/asos.png" alt="logo" />{" "}
          </a>
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
              <li className="nav-item">
                <NavLink className="nav-link" to="/women">
                  Femme
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/men">
                  Homme
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <Link className="nav-link" to="/signup">
            signup
          </Link>
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
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#!">
                Clothing
              </a>
              <a className="nav-item nav-link" href="#!">
                Shoes
              </a>
              <a className="nav-item nav-link" href="#!">
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
