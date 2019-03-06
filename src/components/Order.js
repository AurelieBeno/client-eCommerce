import React, { Component } from "react";

import { getOrder } from "../api.js";
import { deleteProduct } from "../api.js";

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

  // removeTask(index, event) {
  //   const tasks = this.state.tasks
  //   tasks.splice(index, 1)
  //   this.setState({tasks})

  // deleteClick = () => {
  //   console.log(
  //     "Check now",
  //     this.state.cart.find(function(element) {
  //       return (element.productId = 1398013);
  //     })
  //   );
  //   deleteProduct(this.state.cart._id).then(response => {
  //     console.log("Delete from bag", response.data);
  //     // this.setState({ isRedirect: true });
  //   });
  // };

  deleteClick(productIndex) {
    console.log(productIndex);
    const cart = this.state.cart;
    console.log(cart[productIndex]._id);
    deleteProduct(cart[productIndex]._id);

    this.setState({ cartArray: cart });
  }

  componentDidMount() {
    getOrder().then(response => {
      console.log("Order Details", response.data);
      this.setState(response.data);
    });
  }
  render() {
    const { productItem, cart, totalPrice } = this.state;
    // console.log("coucou", this.state.productItem);
    // const tasks = (this.state.tasks||[]).map((task,index)=>(
    //   <li>
    //     {task} <button name="removeTask" onClick={event=>this.handleClickIndex(index,event)}>x</button>
    //   </li>
    // ))
    console.log(this.state, "show me the state  ");

    console.log("Show me the cart", cart);

    console.log("HolaHalo", productItem);
    return (
      <div className="product-detail-container">
        <h2>MY BAG</h2>
        {cart.map((oneCart, index) => {
          return (
            <section>
              <div>
                <button
                  onClick={() => this.deleteClick(index)}
                  type="button"
                  className="bag-remove"
                >
                  <i className="fas fa-times" />
                </button>
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
