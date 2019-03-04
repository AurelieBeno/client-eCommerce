import React, { Component } from "react";

import { getProductDetails } from "../api.js";

import "./ProductDetails.css";

var texts = ["S", "M", "L"];
class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productItem: {
        size: []
      },
      clickedText: ""
    };
  }

  handleClick = i => {
    this.setState({ clickedText: texts[i] });
  };
  componentDidMount() {
    const { params } = this.props.match;

    getProductDetails(params.productId).then(response => {
      console.log("Product Details", response.data);
      this.setState({ productItem: response.data });
    });
  }
  render() {
    const { clickedText } = this.state;
    const { productItem } = this.state;
    console.log(productItem);
    return (
      <div className="product-detail-container">
        <div>
          {texts.map((text, i) => (
            <button key={i} onClick={() => this.handleClick(i)}>
              Click me {i + 1}
            </button>
          ))}
          {clickedText && <p>I clicked on button with text: {clickedText}</p>}
        </div>
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
              <a href="#"> Find your size</a>
            </small>
          </div>

          <div class="drop">
            <div>
              <select
                className="selectSize btn btn-success"
                name="sizeList"
                form="formSize"
                onClick={() => this.handleClick()}
              >
                {productItem.size.map((oneSize, index) => {
                  console.log(index, oneSize);
                  return (
                    <option className="optionSize" value="text">
                      {oneSize}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button type="button" class="btn btn-success add-cart">
            ADD TO BAG
          </button>
          {/* <i class="far fa-heart" />
           */}
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
