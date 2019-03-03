import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Clothing.css";

class Clothing extends Component {
  render() {
    return (
      <div className="ListItem-page">
        {/* <h3>SHOP BY PRODUCT</h3> */}
        <div className="container-fluide">
          <ul className="row">
            <li>
              <Link to="#" className="col liColor">
                New in
              </Link>
            </li>

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
        <div>
          {/* <section>
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
          */}
        </div>

        {/* <section>
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
        </section> */}
      </div>
    );
  }
}

export default Clothing;
