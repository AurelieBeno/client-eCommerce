import React, { Component } from "react";

import { getOrder } from "../api.js";

import "./Order.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { params } = this.props.match;

    getOrder(params.productId).then(response => {
      console.log("Product Details", response.data);
    });
  }
  render() {
    const { productId } = this.params;
    console.log(productId);
    return (
      <div>
        <div className="product-detail-container">
          <section className="product-detail">
            <div className="image-detail">
              <img
                className="detail-img"
                src={productId.baseImageUrl}
                alt="First slide"
              />
            </div>
            <div>
              <h4>{productId.name}</h4>
            </div>
            <div className="detail-price">
              <span className="price"> {productId.price} $</span>
            </div>
            <div className="detail-color">
              <p className="color">
                <span>{productId.colour}</span>
              </p>
            </div>
            <div className="size">
              <p className="sizeP">Size</p>
            </div>

            <div className="product-detail-container">
              <section className="product-detail">
                <div className="image-detail">
                  <h2>TOTAL</h2>
                </div>
              </section>
            </div>

            <button
              type="button"
              className="btn btn-success add-cart"
              // key={}
            >
              PAYMENT
            </button>
            {/* <i className="far fa-heart" />
             */}
          </section>
        </div>
      </div>
    );
  }
}

export default Order;
