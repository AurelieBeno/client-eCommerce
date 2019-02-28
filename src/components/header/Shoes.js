import React, { Component } from "react";
import { Link } from "react-router-dom";

class Shoes extends Component {
  render() {
    return (
      <div>
        <div>
          <section>
            <h3>SHOP BY PRODUCT</h3>
            <ul>
              <li>
                <Link to="#">View all</Link>
                <Link to="#">New in</Link>
                <Link to="#">Boots</Link>
                <Link to="#">Chelsea Boots</Link>
                <Link to="#">Flat Shoes</Link>
                <Link to="#">Heels</Link>
                <Link to="#">Loafers</Link>
                <Link to="#">Sandals</Link>
                <Link to="#">Slippers</Link>
              </li>
            </ul>
          </section>
        </div>

        <div>
          <section>
            <h3>SHOP BY BRAND</h3>
            <ul>
              <li>
                <Link to="#">ASOS DESIGN</Link>
                <Link to="#">adidas</Link>
                <Link to="#">Converse</Link>
                <Link to="#">Chelsea Boots</Link>
                <Link to="#">Dr Martens</Link>
                <Link to="#">Glamorous</Link>
                <Link to="#">Nike</Link>
                <Link to="#">Office</Link>
                <Link to="#">Public Desire</Link>
                <Link to="#">UGG</Link>
                <Link to="#">Vans</Link>
              </li>
            </ul>
          </section>
        </div>

        <div>
          <img src="#" alt="New Seasson Footwear" />
          <img src="#" alt="Sneaker Brand" />
        </div>
      </div>
    );
  }
}

export default Shoes;
