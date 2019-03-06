import React, { Component } from "react";

import { getOrder } from "../api.js";

import "./Order.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productItem: [],
      cart: [],
      totalPrice: ""
    };
  }

  componentDidMount() {
    getOrder().then(response => {
      console.log("Order Details", response.data);
      this.setState(response.data);
    });
  }
  render() {
    const { productItem, cart, totalPrice } = this.state;
    console.log(this.state, "show me the state  ");

    console.log("Show me the cart", cart);

    console.log("HolaHalo", productItem);
    return (
      <div className="product-detail-container">
        {cart.map(oneCart => {
          return (
            <section>
              <div>
                <img
                  className="detail-img"
                  src={oneCart.baseImageUrl}
                  alt="models"
                />
              </div>
              <div>{oneCart.name}</div>
              <div>{oneCart.price}</div>
              <div>{oneCart.colour}</div>
              <div>{oneCart.size}</div>
              <div>{oneCart.totalPrice}</div>
            </section>
          );
        })}
        <p>TOTAL {totalPrice}</p>
        <button
          type="button"
          className="btn btn-success add-cart"
          // key={}
        >
          PAYMENT
        </button>
      </div>
    );
  }
}
export default Order;
