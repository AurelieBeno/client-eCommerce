import React, { Component } from "react";

import { getProductDetails } from "../api.js";

import "./ProductDetails.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productItem: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    getProductDetails(params.productId).then(response => {
      console.log("Product Details", response.data);
      this.setState({ productItem: response.data });
    });
  }
  render() {
    const { productItem } = this.state;
    return (
      <div>
        <div>
          <h2>{productItem.name}</h2>
        </div>
        <div
          // Carousel photo of product
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="..." alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <section>
          {/* Change with data from JSON */}
          <h1>Product Name</h1>
          <div>Product Price</div>
          <p>Free Shipping Worldwide</p>
          <p>
            <b>Colour:</b>Insert JSON
          </p>
          <p>Size:</p>
          {/* Dropdown button */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Please select
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#!">
                Action
              </a>
              <a class="dropdown-item" href="#!">
                Another action
              </a>
              <a class="dropdown-item" href="#!">
                Something else here
              </a>
            </div>
          </div>

          <button type="button" class="btn btn-success">
            ADD TO BAG
          </button>
          <i class="far fa-heart" />
        </section>
      </div>
    );
  }
}

export default ProductDetails;
