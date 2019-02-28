import React, { Component } from "react";

import { Switch, Route, NavLink, Link } from "react-router-dom";
import Women from "./Women";
import SearchBar from "./SearchBar";
import Category from "./Category";
import Clothing from "./Clothing";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="mr-auto">
          <img src="../images/asos.png" alt="logo" />
          <NavLink to="/women">WOMEN</NavLink>
          <NavLink to="/men">MEN</NavLink>
          <SearchBar />
        </nav>

        <nav className="HeaderBelow">
          <Category />
        </nav>

        <Switch>
          <Route path="/women" component={Women} />
        </Switch>
      </div>
    );
  }
}

export default Header;
