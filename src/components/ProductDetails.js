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
      <div className="product-detail-container">
        <div className="image-detail">
          <img
            className="detail-img"
            src={productItem.baseImageUrl}
            alt="First slide"
          />
        </div>

        <section className="product-detail">
          {/* Change with data from JSON */}
          <div>
            <h4>{productItem.name}</h4>
          </div>

          <div className="detail-price">
            <span className="price"> {productItem.price} $</span>
            <small>Free Shipping Worldwide *</small>
          </div>
          <div className="detail-color">
            <p className="color">
              <span>Colour: </span> {productItem.colour}
            </p>
          </div>
          <div className="size">
            <p className="sizeP">Size</p>
            <small>
              <a href="#!"> Find your size</a>
            </small>
            {/* <p>{productItem.size}</p> */}
          </div>

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
              Please select your size
            </button>
            {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {productItem.size.map()}
              <a class="dropdown-item" href="#!">
                {productItem.size[0]}
              </a>
              <a class="dropdown-item" href="#!">
                Another action
              </a>
              <a class="dropdown-item" href="#!">
                Something else here
              </a>
            </div> */}
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

// Carousel

/* <div className="carousel-inner"> */

/* <div className="carousel-item active"> */

// Carousel photo of product

// id="carouselExampleControls"
// class="carousel slide"
// data-ride="carousel"

/* <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide" />
            </div> */

/* <a
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
          </a> */
