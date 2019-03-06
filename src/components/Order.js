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
      <section className="cart-container container">
        <div className="row rowTitle">
          <div className="col-6  offset-md-4 titleCart">
            <div className="cartTitle">
              <h3 className="fth cartH3"> My bag</h3>
              <small className="small">Items are reserved for 60 minutes</small>
            </div>
          </div>
          <hr />
        </div>
        {cart.map(oneCart => {
          return (
            <div>
              <div className="row contentdetail">
                <div className="test col-6 offset-md-2 ">
                  <div className="colColor">
                    <div className="imageCart ">
                      <img
                        className="detail-img-cart"
                        src={oneCart.baseImageUrl}
                        alt="models"
                      />
                    </div>
                  </div>
                  <div className="contentContainer col-lg-4 col-sm-12">
                    <div className="cartPrice fth">$ {oneCart.price}</div>
                    <div className="cartName">{oneCart.name}</div>
                    <div className="cartColor">{oneCart.colour}</div>
                    <div className="subTotalContainer">
                      <div className="cartSubPrice fth">
                        Sub-total $ {totalPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-4 totalContainer">
          <div className="totalPrice fth">
            <p>TOTAL $ {totalPrice}</p>
          </div>
          <button
            type="button"
            className="btn btn-success add-cart"
            // key={}
          >
            PAYMENT
          </button>
        </div>
      </section>
    );
  }
}
export default Order;
