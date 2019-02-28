import React, { Component } from "react";

import { Switch, Route, NavLink, Link } from "react-router-dom";
import Women from "./Women";
import SearchBar from "./SearchBar";

class Header extends Component {
  render() {
    return (
      <div>
        <img src="../public/images/asos.png" alt="logo" />
        <nav>
          <NavLink to="/women">WOMEN</NavLink>
          <NavLink to="/men">MEN</NavLink>
          <SearchBar />
        </nav>

        <Switch>
          <Route path="/women" component={Women} />
        </Switch>
      </div>
    );
  }
}

export default Header;
