import React, { Component } from "react";

// import { Link } from "react-router-dom";

import "./ProductList.css";

import { getProductList } from "../api.js";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: []
    };
  }

  componentDidMount() {
    getProductList().then(response => {
      console.log("Product List", response.data);

      this.setState({ productArray: response.data });
    });
  }

  render() {
    const { productArray } = this.state;
    return (
      <div>
        <ul>
          {productArray.map(oneProduct => {
            return <p>{oneProduct.colour}</p>;
          })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
