import React, { Component } from "react";

import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <section className="NotFound">
        <h2>404 Not Found</h2>
        <p>Sorry! The page you are looking for does not exist.</p>

        <div className="col-md-3 offset-md-3">
          <img src="./images/NotFound.jpeg" alt="Thinking" />
          <p>
            We sent our team out to think which page you want to go, but if you
            can't wait. Please click
          </p>
          <a href="/" className="badge badge-light">
            Home
          </a>
        </div>
      </section>
    );
  }
}

export default NotFound;
