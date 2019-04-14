import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./ProductList.css";

function getProductAdress(product) {
  return `/product/${product._id}`;
}

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredArray: [],
      gender: "",
      color: "",
      price: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      filteredArray: this.props.productArray
    });
  }

  componentDidUpdate(oldProps) {
    // console.log(JSON.stringify(oldProps));

    if (
      oldProps.productArray.length === 0 &&
      this.props.productArray.length > 0
    ) {
      this.setState({
        filteredArray: this.props.productArray
      });
    }
  }

  onChangePrice = e => {
    const { value } = e.target;
    const { filteredArray } = this.state;
    let priceArray = "";
    // console.log("here value" + value);
    if (value === "Ascending") {
      priceArray = filteredArray
        .filter(product => product.price)
        .sort((a, b) => a.price - b.price);
    } else if (value === "Descending") {
      priceArray = filteredArray
        .filter(product => product.price)
        .sort((a, b) => b.price - a.price);
    }
    this.setState({ filteredArray: priceArray });
  };
  onChangeType = e => {
    const { value } = e.target;
    let typeArray = this.props.productArray;

    if (value === "Shoes") {
      typeArray = this.props.productArray.filter(product => {
        return product.productType === "shoes";
      });
    } else if (value === "Dress") {
      typeArray = this.props.productArray.filter(product => {
        return product.productType === "dress";
      });
    }
    this.setState({ filteredArray: typeArray });
    console.log("hello typeArray" + typeArray);
  };

  onChangeGender = e => {
    const { value } = e.target;
    let genderArray = this.props.productArray;

    if (value === "Male") {
      genderArray = this.props.productArray.filter(
        product => product.gender === "Male"
      );
    }
    if (value === "Female") {
      genderArray = this.props.productArray.filter(
        product => product.gender === "Female"
      );
    }
    this.setState({ filteredArray: genderArray });

    console.log("hello genderList" + genderArray);
  };

  render() {
    const { filteredArray } = this.state;

    return (
      <section>
        <div className="productListTitle">
          <h2>All Product </h2>
        </div>
        <div className="product-list-container container-fluid">
          <div className="row rowFilter">
            <div className="col-6 m-auto d-flex aaa">
              <div className="col-lg-3 col-sm-12 w-100">
                <select
                  className="selectFilter text-center  "
                  onChange={this.onChangeGender.bind(this)}
                  name="gender"
                >
                  <option disabled selected value className="optionitem">
                    By Gender
                  </option>
                  <option className="optionitem" value="Male">
                    Male
                  </option>
                  <option className="optionitem" value="Female">
                    Female
                  </option>
                </select>
              </div>

              <div className="col-lg-3 col-sm-12 w-100 ">
                {/* <div className="gender">Product type</div> */}

                <select
                  className="selectFilter"
                  onChange={this.onChangeType.bind(this)}
                  name="gender"
                >
                  <option disabled selected value className="optionitem">
                    By Type
                  </option>
                  <option className="optionitem" value="Dress">
                    Dress
                  </option>
                  <option className="optionitem" value="Shoes">
                    Shoes
                  </option>
                </select>
              </div>
              <div className="col-lg-3 col-sm-12 w-100 ">
                <select
                  className="selectFilter"
                  onChange={this.onChangePrice.bind(this)}
                  name="gender"
                >
                  <option disabled selected value className="optionitem">
                    By Price
                  </option>
                  <option className="optionitem" value="Ascending">
                    Ascending
                  </option>
                  <option className="optionitem" value="Descending">
                    Descending
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* productList */}
          <div className="nav-productList" />
          <ul className="row ul-container ">
            {filteredArray.map((oneProduct, index) => {
              return (
                <li className="list-container col-lg-3 col-md-4 col-sm-6">
                  <div className="addMargin">
                    <div className="img">
                      <Link to={getProductAdress(oneProduct)}>
                        <img
                          className="list-img"
                          key={index}
                          src={oneProduct.baseImageUrl}
                          alt="Item "
                        />
                      </Link>
                    </div>
                    <div key={oneProduct.name} className="nameList">
                      {oneProduct.name}
                    </div>

                    <div key={oneProduct.index} className="priceList">
                      {oneProduct.price} $
                    </div>
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
