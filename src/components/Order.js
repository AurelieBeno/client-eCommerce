import React, { Component } from "react";

import { Switch, Route, Link, Redirect } from "react-router-dom";

import { getOrder, deleteProduct } from "../api.js";

import AfterPayement from "../components/AfterPayement.js";

import "./Order.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productItem: [],
      cart: [],
      totalPrice: "",
      isPayed: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    getOrder().then(response => {
      console.log("Order Details", response.data);
      this.setState(response.data);
    });
  }

  deleteClick(product) {
    deleteProduct(product._id).then(response => {
      console.log("Delete Product", response.data);
      this.setState(response.data);
    });
  }

  render() {
    // console.log("CURRENT USER", currentUser);

    const { cart, totalPrice } = this.state;
    // console.log(this.state, "show me the state  ");
    // const { currentUser } = this.props;
    // console.log("CURRENT USER", currentUser);
    // if (currentUser === undefined) {
    //   return <Redirect to="/LogOrSign" />;
    // }
    return (
      <section className="cart-container container">
        <div className="row rowTitle m-auto w-100">
          <div className="col-12 titleCart">
            <div className="col-12 text-center titleCartNew">
              <h3 className="fth cartH3"> My bag</h3>
              <small className="small">Items are reserved for 60 minutes</small>
            </div>
          </div>
          <hr />
          <div className="col-lg-10 col-md-10 col-sm-12 row">
            {cart.map(oneCart => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex oneCart">
                  <div className="contentImg">
                    <img
                      className="detail-img-cart"
                      src={oneCart.baseImageUrl}
                      alt="models"
                    />
                  </div>
                  <div className="contentContainer contentText">
                    <div className="cartPrice fth">$ {oneCart.price}</div>
                    <div className="cartName">{oneCart.name}</div>
                    <div className="cartColor">{oneCart.colour}</div>
                  </div>
                  <button
                    onClick={() => this.deleteClick(oneCart)}
                    type="button"
                    className="bag-remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              );
            })}
          </div>
          <div className=" totalContainer col-lg-2 col-md-2 col-sm-12">
            <div className="totalPrice fth">
              <p>TOTAL $ {totalPrice}</p>
            </div>
            <button
              type="button"
              className="btn btn-success add-cart"

              // key={}
            >
              <Link to="/afterPayement">PAYMENT</Link>
            </button>
          </div>
          <Switch>
            <Route path=" /afterPayement" component={AfterPayement} />
          </Switch>
        </div>
      </section>
    );
  }
}

export default Order;
