import React, { Component } from "react";

import "./Style/AfterPayement.css";

class AfterPayement extends Component {
  render() {
    return (
      <section className="AfterPayement ">
        <div className="container">
          <div className="text-container">
            <h4 className="AfterPayement-title">Thank You !</h4>
            <p className="AfterPayement-para">See you soon on ASOS :)</p>
            {/* </div> */}
            <img className="endImage" src="../images/endPicture.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default AfterPayement;
