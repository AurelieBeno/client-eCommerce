import React, { Component } from "react";

import "./AfterPayement.css";

class AfterPayement extends Component {
  render() {
    return (
      <section className="AfterPayement ">
        <div className="container">
          <div className="text-container">
            <h4 className="AfterPayement-title">
              Thank You (CurrentUser.name){" "}
            </h4>
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
