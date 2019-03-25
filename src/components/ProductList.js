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

    this.onChange = this.onChange.bind(this);

    // this.handleChange = this.handleChange.bind(this);
    // this.handleChangeType = this.handleChangeType.bind(this);
    // this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      filteredArray: this.props.productArray
    });
  }

  componentDidUpdate(oldProps) {
    console.log(JSON.stringify(oldProps));

    if (
      oldProps.productArray.length === 0 &&
      this.props.productArray.length > 0
    ) {
      this.setState({
        filteredArray: this.props.productArray
      });
    }
  }

  // handleChangeType = event => {
  //   const { value } = event.target;
  //   let typeArray;
  //   if (value === "dress") {
  //     typeArray = this.props.productArray.filter(function(product) {
  //       return product.productType === "dress";
  //     });
  //   } else if (value === "shoes") {
  //     typeArray = this.props.productArray.filter(function(product) {
  //       return product.productType === "shoes";
  //     });
  //   }
  //   this.setState({ gender: value, filteredArray: typeArray });
  // };

  // handleChange = event => {
  //   const { value } = event.target;
  //   let genderArray;
  //   if (value === "Male") {
  //     genderArray = this.props.productArray.filter(function(product) {
  //       return product.gender === "Male";
  //     });
  //   } else if (value === "Female") {
  //     genderArray = this.props.productArray.filter(function(product) {
  //       return product.gender === "Female";
  //     });
  //   }

  //   this.setState({ gender: value, filteredArray: genderArray });
  // };

  // handleSort = event => {
  //   const { value } = event.target;

  //   let priceArray;
  //   // let SortArray;
  //   if (value === "Ascending") {
  //     priceArray = this.props.productArray
  //       .filter(product => product.price)
  //       .sort((a, b) => a.price - b.price);
  //   } else if (value === "Descending") {
  //     priceArray = this.props.productArray
  //       .filter(product => product.price)
  //       .sort((a, b) => b.price - a.price);
  //   }

  //   console.log("PRICE ARRAY", priceArray);
  //   this.setState({ filteredArray: priceArray });
  // };
  onChange = e => {
    const { value } = e.target;
    let priceArray = this.props.productArray;
    console.log("here value" + value);
    if (value === "Ascending") {
      priceArray = this.props.productArray
        .filter(product => product.price)
        .sort((a, b) => a.price - b.price);
    } else if (value === "Descending") {
      priceArray = this.props.productArray
        .filter(product => product.price)
        .sort((a, b) => b.price - a.price);
    }
    if (value === "Male") {
      priceArray = this.props.productArray.filter(
        product => product.gender === "Male"
      );
    }
    if (value === "Female") {
      console.log("Hello Female");
      priceArray = this.props.productArray.filter(
        product => product.gender === "Female"
      );
    }
    this.setState({ filteredArray: priceArray });
  };

  // this.setState({ [e.target.gender]: e.target.value });

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
                  onChange={this.onChange.bind(this)}
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
                  onChange={this.onChange.bind(this)}
                  name="gender"
                >
                  <option disabled selected value className="optionitem">
                    By Type
                  </option>
                  <option className="optionitem" value="dress">
                    Dress
                  </option>
                  <option className="optionitem" value="shoes">
                    Shoes
                  </option>
                </select>
              </div>
              <div className="col-lg-3 col-sm-12 w-100 ">
                <select
                  className="selectFilter"
                  onChange={this.onChange.bind(this)}
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
            {filteredArray.map(oneProduct => {
              return (
                <li className="list-container col-lg-3 col-md-4 col-sm-6">
                  <div className="addMargin">
                    <div className="img">
                      <Link to={getProductAdress(oneProduct)}>
                        <img
                          className="list-img"
                          src={oneProduct.baseImageUrl}
                          alt="Item "
                        />
                      </Link>
                    </div>
                    <div className="nameList">{oneProduct.name}</div>

                    <div className="priceList">{oneProduct.price} $</div>
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
