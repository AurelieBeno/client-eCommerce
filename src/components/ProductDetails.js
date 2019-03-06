import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

import { getProductDetails, addProduct } from "../api.js";

import "./ProductDetails.css";
import Order from "./Order.js";

var texts = ["S", "M", "L"];
class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productItem: {
        size: []
      },
      clickedText: "",
      isRedirect: false
    };
  }

  cartClick = () => {
    // console.log(this.state.productItem._id);
    addProduct(this.state.productItem._id).then(response => {
      console.log("Add to bag", response.data);
      this.setState({ isRedirect: true });
    });
  };

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
    const { isRedirect } = this.state;
    // redirect user to product list after click add to cart
    if (isRedirect) {
      return <Redirect to="/product" />;
    }
    const { productItem } = this.state;
    console.log(productItem);
    return (
      <div className="product-detail-container">
        <div
          className="image-detail container-fluide
        "
        >
          <div className="row rowT">
            <div className="col-3">
              <img
                className="detail-img"
                src={productItem.baseImageUrl}
                alt="First slide"
              />
            </div>
          </div>
        </div>
        <section className="container-fluide">
          {/* Change with data from JSON */}
          <div className="row">
            <div className="col-10">
              <h4>{productItem.name}</h4>
            </div>
          </div>
          <div className="row">
            <div className="detail-price col-10">
              <span className="price"> {productItem.price} $</span>
              <small>Free Shipping Worldwide *</small>
            </div>
          </div>
          <div className="row">
            <div className="detail-price col-10">
              <div className="detail-color">
                <p className="color">
                  <span>Colour: </span> {productItem.colour}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="detail-price col-10">
              <div className="size">
                <p className="sizeP">Size</p>
                <small>
                  <a href="#!"> Find your size</a>
                </small>
              </div>
            </div>
          </div>
          <div className="drop">
            <div>
              <select
                className="selectSize lt-04 btn btn-success"
                name="sizeList"
                form="formSize"
                onClick={() => this.handleClick()}
              >
                <option disabled selected value>
                  -- select your size --
                </option>
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
          <button
            onClick={() => this.cartClick()}
            type="button"
            className="btn btn-success add-cart"
          >
            ADD TO BAG
          </button>
          {/* 
          <i className="far fa-heart" /> */}
          <Link to="/check-out">
            <button type="button" className="btn btn-success add-cart">
              CHECK OUT
            </button>
          </Link>
        </section>
        <Switch>
          <Route path="/check-out" component={Order} />
        </Switch>
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
// className="carousel slide"
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
