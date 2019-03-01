import React, { Component } from "react";

import "./Offers.css";

class Offers extends Component {
  render() {
    return (
      <div class="container offers">
        <div class="row">
          <div class="col-lg-6">
            <h6>
              <b>PREMIER DELIVERY</b>
            </h6>
            <p>Delivery 24hr unlimited for 15€/year.</p>
          </div>
          <div class="col-lg-6">
            <h6>
              <b>STUDENTS: 10% DISCOUNT 7J/7</b>
            </h6>
            <p>And lots of surprises.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Offers;
