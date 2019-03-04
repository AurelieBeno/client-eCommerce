import React, { Component } from "react";

// import { Link } from "react-router-dom";

import "./ProductList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProduct: []
    };
  }
  render() {
    const { productArray } = this.props;
    console.log(this.props.productArray, "here");

    return (
      <session className="product-list-container">
        <h2>All Product </h2>
        <div className="nav-productList">
          <ul className="nav-ul-container">
            <li>
              <button>Gamme de prix</button>
            </li>
            <li>
              <button>Color</button>
            </li>
            <li>
              <button>Brand</button>
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
                    <img
                      className="list-img"
                      src={oneProduct.baseImageUrl}
                      alt="Item "
                    />
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
      </session>
    );
  }
}

export default ProductList;
