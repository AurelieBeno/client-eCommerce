import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import Clothing from "./Clothing";

// import clothing from "./components/Clothing.js";

class Women extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/clothing" component={Clothing} />
        </Switch>
      </div>
    );
  }
}

export default Women;
