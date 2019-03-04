import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./ProductList.css";

function getProductAdress(product) {
  return `/product/${product._id}`;
}

class ProductList extends Component {
  render() {
    const { productArray } = this.props;
    console.log(this.props.productArray, "here");

    return (
      <section className="product-list-container">
        <h2>All Product </h2>
        <div className="nav-productList">
          <ul className="nav-ul-container">
            <li>
              <button className="btnList">Gamme de prix</button>
            </li>
            <li>
              <button className="btnList">Color</button>
            </li>
            <li>
              <button className="btnList">Brand</button>
            </li>
          </ul>
        </div>

        <div>
          <ul className="ul-container ">
            {productArray.map(oneProduct => {
              console.log(productArray);
              return (
                <li className="list-container col-3">
                  <div className="row img">
                    <Link to={getProductAdress(oneProduct)}>
                      <img
                        className="list-img"
                        src={oneProduct.baseImageUrl}
                        alt="Item "
                      />
                    </Link>
                  </div>
                  <div className="row name">
                    {oneProduct.name}
                    {/* <span> {oneProduct.colour} </span> */}
                  </div>

                  <div className="price">
                    <b>{oneProduct.price} $</b>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductList;
