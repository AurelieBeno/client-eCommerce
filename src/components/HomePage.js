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
              <button type="button" class="btn btn-outline-dark">
                <b>SHOP NOW</b>
              </button>
            </div>
            <div className="offset-2" />
          </div>
        </div>

        {/* Carousels menu */}
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="./images/Slide1.png"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="./images/Slide2.png"
                alt="Second slide"
              />
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            {/* <span class="carousel-control-prev-icon" aria-hidden="true" /> */}
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            {/* <span class="carousel-control-next-icon" aria-hidden="true" /> */}
          </a>
        </div>

        {/* Credit Card and Social Media */}

        <div class="container card">
          <div class="row">
            <div class="col-12">
              <img src="./images/CreditCard.png" alt="Card" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
