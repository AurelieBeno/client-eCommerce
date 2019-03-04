import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Clothing.css";

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
                <li className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-hover liColor"
                    data-toggle="dropdown"
                  >
                    New in
                  </Link>
                  <li />
                  <ul className="dropdown-menu">
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
                  </ul>
                </li>
              </div>
              <div className="container">
                <div className="dropdown-menu">
                  <div className="row" aria-labelledby="dropdownMenuLink">
                    <h3>New articles</h3>
                  </div>
                  <div className="row">
                    <a className="dropdown-item col-6" href="#">
                      All the collection
                    </a>
                    {/* <a class="dropdown-item row" href="#">
                      shoes
                    </a> */}
                  </div>

                  {/* <div class="row" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item col" href="#">
                      Another action
                    </a>
                  </div> */}
                  {/* 
                  <div class="row" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item col" href="#">
                      Something else here
                    </a>
                  </div> */}
                  {/* <div class="row " aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item col-1" href="#">
                      Something else here 2
                    </a>
                  </div> */}
                </div>
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
      </div>
    );
  }
}

export default Clothing;
{
  /* <section>
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
        </section> */
  /* <section>
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
          */
}
