import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import "../Style/Clothing.css";
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
              <a
                href="https://www.asos.com/women/activewear/cat/?cid=26091&nlid=ww|activewear|shop+by+product"
                className="col liColor"
              >
                Activewear
              </a>
            </li>

            <li>
              <a
                href="https://www.asos.com/women/shoes/cat/?cid=4172&nlid=ww|shoes|shop+by+product"
                className="col liColor"
              >
                Shoes
              </a>
            </li>
            <li>
              <a
                href="https://www.asos.com/women/coats-jackets/cat/?cid=2641&nlid=ww|clothing|shop+by+product"
                className="col liColor"
              >
                Jackets
              </a>
            </li>
            <li>
              <a
                href="https://www.asos.com/women/dresses/cat/?cid=8799&nlid=ww|clothing|shop+by+product"
                className="col liColor"
              >
                Dresses
              </a>
            </li>
            <li>
              <a
                href="https://www.asos.com/search/?q=sweatshirt"
                className="col liColor"
              >
                Sweatshirts
              </a>
            </li>
            <li>
              <a
                href="https://www.asos.com/search/?q=jeans"
                className="col liColor"
              >
                Jeans
              </a>
            </li>
            <li>
              <a
                href="https://www.asos.com/women/lingerie-nightwear/cat/?cid=6046&nlid=ww|clothing|shop+by+product"
                className="col liColor"
              >
                Lingerie & Nightwear
              </a>
            </li>
            <li className="red">
              <a
                href="https://www.asos.com/women/outlet/cat/?cid=27391&nlid=ww|outlet|shop+by+product"
                className="col liColor"
              >
                Outlet
              </a>
            </li>
            <li>
              <a href="#!" className="col liColor">
                Discount
              </a>
            </li>
            <li>
              <a
                href="https://marketplace.asos.com/women?nlid=ww|marketplace|ctasHomepage&nlid=ww|marketplace|ctas"
                className="col liColor"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="https://www.asos.com/women/fashion-feed/?nlid=ww|inspiration|ctas"
                className="col liColor"
              >
                Inspiration
              </a>
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
