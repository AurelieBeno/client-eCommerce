import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
// import Clothing from "./Clothing";
import ProductList from "../ProductList";

class Women extends Component {
  render() {
    return (
      <section>
        <div />
        <div>
          <Switch>
            {/* <Route path="/clothing" component={Clothing} /> */}
            <Route path="/woman/product" component={ProductList} />
          </Switch>
        </div>
      </section>
    );
  }
}

export default Women;
