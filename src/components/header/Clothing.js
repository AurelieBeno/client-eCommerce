import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import "./Clothing.css";
import ProductList from "../ProductList";

class Clothing extends Component {
  render() {
    return (
      <div className="ListItem-page lt-04">
        <div className="container-fluid">
          <ul className="row myRow">
            <li>
              <Link to="/product" className=" liColor">
                All Product
              </Link>
            </li>

            <li>
              <Link to="#" className="col liColor">
                Activewear
              </Link>
            </li>

            <li>
              <Link to="#" className="col liColor">
                Shoes
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Jackets
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Dresses
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Sweatshirts
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Jeans
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Lingerie & Nightwear
              </Link>
            </li>
            <li className="red">
              <Link to="#" className="col liColor">
                Outlet
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Discount
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Inspiration
              </Link>
            </li>
          </ul>
        </div>
        <div />

        <Switch>
          <Route path="/clothing/product" component={ProductList} />
        </Switch>
      </div>
    );
  }
}

export default Clothing;
