import React, { Component } from "react";

import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <section id="homepage">
        {/* Top main image */}

        <div className="container">
          <div className="row">
            <div className="col-12 bigImg">
              <img src="../images/Design.jpg" alt="Design" />
            </div>
          </div>
        </div>

        {/* Twin Images Middle */}
        <div className="container container-middle">
          <div className="row justify-content-around">
            <div className="offset-2" />

            <div className="col-lg-4">
              <img
                src="./images/JeansMiddle.png"
                alt="Jeans"
                className="myColImg"
              />
              <h5>
                <b>DENIM DROPS</b>
              </h5>
              <p>It's all in the jeans</p>
              <button type="button" className="btn btn-outline-dark">
                <b>SHOP NOW</b>
              </button>
            </div>

            <div className="col-lg-4">
              <img
                src="./images/DressMiddle.png"
                alt="Dress"
                className="myColImg"
              />
              <h5>
                <b>FRESH DRESSES</b>
              </h5>
              <p>Winter, but make it spring</p>
              <button type="button" className="btn btn-outline-dark">
                <b>SHOP NOW</b>
              </button>
            </div>
            <div className="offset-2" />
          </div>
        </div>

        {/* Carousels menu */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="./images/Slide1.png"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./images/Slide2.png"
                alt="Second slide"
              />
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            {/* <span class="carousel-control-next-icon" aria-hidden="true" /> */}
          </a>
        </div>

        {/* Credit Card and Social Media */}
      </section>
    );
  }
}

export default HomePage;
