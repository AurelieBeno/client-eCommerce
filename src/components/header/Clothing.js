import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clothing extends Component {
  render() {
    return (
      <div>
        <div>
          <section>
            <h3>SHOP BY PRODUCT</h3>
            <ul>
              <li>
                <Link to="#">New in</Link>
                <Link to="#">Activewear</Link>
                <Link to="#">Co-ords</Link>
                <Link to="#">Coats & Jackets</Link>
                <Link to="#">Dresses</Link>
                <Link to="#">Exclusives at ASOS</Link>
                <Link to="#">Hoodies & Sweatshirts</Link>
                <Link to="#">Jeans</Link>
                <Link to="#">Lingerie & Nightwear</Link>
              </li>
            </ul>
          </section>
        </div>

        <div>
          <section>
            <h3>SHOP BY RANGE</h3>
            <div>
              <img src="#" alt="Curve Size" />
              <p>ASOS Curve & Plus Size</p>
            </div>

            <div>
              <img src="#" alt="Maternity" />
              <p>Maternity</p>
            </div>

            <div>
              <img src="#" alt="Petite" />
              <p>Petite</p>
            </div>

            <div>
              <img src="#" alt="Tall" />
              <p>Tall</p>
            </div>
          </section>
        </div>

        <section>
          <h3>SHOP BY EDIT</h3>
          <ul>
            <li>
              <img src="#" alt="Wedding guest" />
              <p>Wedding guest</p>

              <img src="#" alt="Bridesmaids" />
              <p>Bridesmaids</p>

              <img src="#" alt="Workwear" />
              <p>Workwear</p>

              <img src="#" alt="Going out-out" />
              <p>Going out-out</p>

              <img src="#" alt="Holiday" />
              <p>Holiday</p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Clothing;
