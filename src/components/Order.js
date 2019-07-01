import React, { useState, useEffect } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import { Switch, Route } from "react-router-dom";

import { getOrder, deleteProduct } from "../api.js";

import AfterPayement from "../components/AfterPayement.js";

import "./Style/Order.css";

const Order = props => {
  const [productItem, setProductItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [isPayed, setIsPayed] = useState(false);

  function deleteClick(product) {
    deleteProduct(product._id).then(response => {
      console.log("Delete Product", response.data);
      setCart(response.data);
    });
  }

  const onToken = totalPrice => token => {
    // console.log("token ", token);
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + `/checkout`,
        {
          source: token,
          totalPrice: totalPrice,
          receipt_email: token.email
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response.data);
        response === "success "
          ? alert("success")
          : alert("faillure");
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
    getOrder().then(response => {
      console.log("Order details ", response.data);
      setCart(response.data.cart);
      setTotalPrice(response.data.totalPrice);
    });
  }, []);

  return (
    <section className='cart-container container'>
      <div className='row rowTitle m-auto w-100'>
        <div className='col-12 titleCart'>
          <div className='col-12 text-center titleCartNew'>
            <h3 className='fth cartH3'> My bag</h3>
            <small className='small'>
              Items are reserved for 60 minutes
            </small>
          </div>
        </div>
        <hr />
        <div className='col-lg-10 col-md-10 col-sm-12 row'>
          {cart.map((oneCart, index) => {
            return (
              <div
                className='col-lg-4 col-md-6 col-sm-12 d-flex oneCart'
                key={index}
              >
                <div className='contentImg'>
                  <img
                    className='detail-img-cart'
                    src={oneCart.baseImageUrl}
                    alt='models'
                  />
                </div>
                <div className='contentContainer contentText'>
                  <div className='cartPrice fth'>
                    $ {oneCart.price}
                  </div>
                  <div className='cartName'>
                    {oneCart.name}
                  </div>
                  <div className='cartColor'>
                    {oneCart.colour}
                  </div>
                </div>
                <button
                  onClick={() => deleteClick(oneCart)}
                  type='button'
                  className='bag-remove'
                >
                  <i className='fas fa-times' />
                </button>
              </div>
            );
          })}
        </div>
        <div className=' totalContainer col-lg-2 col-md-2 col-sm-12'>
          <div className='totalPrice fth'>
            <p>TOTAL $ {totalPrice}</p>
          </div>
          <StripeCheckout
            stripeKey='pk_test_RD2hsckN1XwsTxFjASz3HWSE006tbbT9fM'
            token={onToken(totalPrice)}
            billingAddress
            shippingAddress
            amount={totalPrice * 100}
            name={"achat"}
          />
          {/* <button
              type="button"
              className="btn btn-success add-cart"

            >
              <Link to="/afterPayement">PAYMENT</Link>
            </buttonP> */}
        </div>
        <Switch>
          <Route
            path=' /afterPayement'
            component={AfterPayement}
          />
        </Switch>
      </div>
    </section>
  );
};

export default Order;
