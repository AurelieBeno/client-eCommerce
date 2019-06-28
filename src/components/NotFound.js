import React, { Component } from "react";

import "./Style/NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <section className="AfterPayement ">
        <div className="container container-middle">
          <div className="text-container">
            <h2>Sorry! The page you are looking for does not exist.</h2>
          </div>
          <div className="col-md-3 offset-md-3">
            <img src="./images/NotFound.jpeg" alt="Thinking" />
            <div className="text-container">
              <p>
                We sent our team out to think which page you want to go, but if
                you can't wait. Please click
              </p>
              <a href="/" className="badge badge-light">
                Home
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFound;
