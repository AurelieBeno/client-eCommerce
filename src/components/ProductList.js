import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./ProductList.css";

function getProductAdress(product) {
  return `/product/${product._id}`;
}

// handleChange(event) {
//   const { value } = event.target;
//   console.log("helo Value", value);
//   if (value === "Female") {
//     this.props.productArray.map(oneProduct => {
//       return { oneProduct };
//     });
//   }
// }

// function getProductByGender(product) {
//   return `/product/${product.gender}`;
// }

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      filteredArray: [],
      gender: "",
      color: ""
    };
  }

  componentDidMount() {
    this.setState({
      filteredArray: this.props.productArray
    });
  }

  componentDidUpdate(oldProps) {
    if (
      oldProps.productArray.length === 0 &&
      this.props.productArray.length > 0
    ) {
      this.setState({
        filteredArray: this.props.productArray
      });
    }
  }

  handleChangeColor = event => {
    const { value } = event.target;
    let typeArray;
    if (value === "dress") {
      typeArray = this.props.productArray.filter(function(product) {
        return product.productType === "dress";
      });
    } else if (value === "shoes") {
      typeArray = this.props.productArray.filter(function(product) {
        return product.productType === "shoes";
      });
    }
    this.setState({ gender: value, filteredArray: typeArray });
  };

  handleChange = event => {
    const { name, value } = event.target;
    let genderArray;
    if (value === "Male") {
      genderArray = this.props.productArray.filter(function(product) {
        return product.gender === "Male";
      });
    } else if (value === "Female") {
      genderArray = this.props.productArray.filter(function(product) {
        return product.gender === "Female";
      });
    }

    this.setState({ gender: value, filteredArray: genderArray });
  };

  render() {
    const { filteredArray } = this.state;
    //console.log(this.props.productArray, "here on productList");
    console.log(this.state);

    return (
      <section>
        <div className="productListTitle">
          <h2>All Product </h2>
        </div>
        <div className="product-list-container container-fluid">
          <div className="filter-container container-fluid ">
            <div className="gender row">Gender</div>
            <div className="genderList col-lg-2 col-sm-12">
              <select
                // className=""
                onChange={this.handleChange}
                name="gender"
              >
                <option disabled selected value className="optionitem">
                  select an option
                </option>
                <option
                  // onChange={event => this.genericOnChange(event)}
                  className="optionitem"
                  value="Male"
                  className="text"
                >
                  Male
                </option>
                <option
                  className="optionitem"
                  // onChange={event => this.genericOnChange(event)}
                  value="Female"
                  className="test"
                >
                  Female
                </option>
              </select>
            </div>
          </div>
          <div className="gender row">Product type</div>
          <div className="genderList col-lg-2 col-sm-12">
            <div>
              <select
                // className=""
                onChange={this.handleChangeColor}
                name="gender"
              >
                <option disabled selected value className="optionitem">
                  select an option
                </option>
                <option
                  // onChange={event => this.genericOnChange(event)}
                  className="optionitem"
                  value="dress"
                  className="text"
                >
                  Dress
                </option>
                <option
                  className="optionitem"
                  // onChange={event => this.genericOnChange(event)}
                  value="shoes"
                  className="test"
                >
                  Shoes
                </option>
              </select>
            </div>
          </div>

          <div className="nav-productList">
            {/* <ul className="nav-ul-container"> */}

            {/* </ul> */}
          </div>
          <ul className="row ul-container ">
            {filteredArray.map(oneProduct => {
              // console.log(productArray);
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

{
  /*   <div className="dropdown">
         <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Gender
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#!">
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
            <a className="dropdown-item" href="#!">
              Women
            </a>
          </div>
        </div> */
}
