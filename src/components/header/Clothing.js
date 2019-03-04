import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import "./Clothing.css";
import ProductList from "../ProductList";

class Clothing extends Component {
  render() {
    return (
      <div className="ListItem-page">
        {/* <h3>SHOP BY PRODUCT</h3> */}
        <div className="container">
          <ul className="row">
            <div className="dropdown">
              {/* <Link
                class=" dropdown-toggle col liColor"
                to="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                New in
              </Link> */}
              <div className="nav-collapse">
                <li>
                  <Link to="/product" className=" liColor">
                    All Product
                  </Link>
                  <li />
                </li>
              </div>
            </div>

            <li>
              <Link to="#" className="col liColor">
                Activewear
              </Link>
            </li>

            <li>
              <Link to="#" className="col liColor">
                Co-ords
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Coats & Jackets
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Dresses
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Exclusives at ASOS
              </Link>
            </li>
            <li>
              <Link to="#" className="col liColor">
                Hoodies & Sweatshirts
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

{
  /* <ul className="dropdown-menu">
                    <li>
                      <h5 className="title">New articles</h5>
                    </li>
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                    <li>
                      <a href="#">Dress</a>
                    </li>
                    <li>
                      <a href="#">Pant</a>
                    </li>
                    <li className="divider" />
                    <li>blah</li>
                    <li>
                      <a href="#">blah</a>
                    </li>
                    <li>
                      <a href="#">blah</a>
                    </li>
                  </ul> */
}

{
  /* <div className="container">
                <div className="dropdown-menu">
                  <div className="row" aria-labelledby="dropdownMenuLink">
                    <h3>New articles</h3>
                  </div>
                  <div className="row">
                    <a className="dropdown-item col-6" href="#">
                      All the collection
                    </a>
                  </div>
                </div>
              </div> */
}
