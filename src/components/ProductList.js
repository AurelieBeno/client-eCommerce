import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./ProductList.css";

function getProductAdress(product) {
  return `/product/${product._id}`;
}

function getProductGender(product) {
  return `/product/${product.gender}`;
}

class ProductList extends Component {
  render() {
    const { productArray } = this.props;
    console.log(this.props.productArray, "here");

    return (
      <section className="product-list-container">
        <h2>All Product </h2>

        {/*   <div class="dropdown">
         <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Gender
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#!">
              <div>
                <ul className="ul-container ">
                  {productArray.map(oneProduct => {
                    console.log(productArray);
                    return (
                      <li className="list-container col-3">
                        <div className="row img">
                          <Link to={getProductGender(oneProduct)}>
                            <img
                              className="list-img"
                              src={oneProduct.baseImageUrl}
                              alt="Item "
                            />
                          </Link>
                        </div>
                        <div className="row name">
                          {oneProduct.name}
                        </div>

                        <div className="price">
                          <b>{oneProduct.price} $</b>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              Men
            </a>
            <a class="dropdown-item" href="#!">
              Women
            </a>
          </div>
        </div> */}

        {/* <div className="nav-productList">
          <ul className="nav-ul-container">
            <li>
              <button className="btnList">Gender</button>
            </li>
            <li>
              <button className="btnList">Colour</button>
            </li>
          </ul>
        </div> */}

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
      </section>
    );
  }
}

export default ProductList;
