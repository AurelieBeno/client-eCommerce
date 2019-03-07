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

  handleSort = event => {
    const { value } = event.target;

    const { sortArray } = this.state;
    if (value === "Croissant") {
      const sortItem = sortArray.sort((a, b) => {
        return a.price.localeCompare(b.price);
      });
      this.setState({ sortArray: sortItem });
    }
  };

  handleChange = event => {
    const { value } = event.target;
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
          <div className="row rowFilter">
            <div className="col-6 m-auto d-flex aaa">
              <div className="col-lg-3 col-sm-12 w-100">
                {/* <div className="gender ">Gender</div> */}
                <select
                  className="selectFilter text-center  "
                  onChange={this.handleChange}
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
                  onChange={this.handleChangeColor}
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
                  onChange={this.handleSort}
                  name="gender"
                >
                  <option disabled selected value className="optionitem">
                    By Price
                  </option>
                  <option className="optionitem" value="dress">
                    Croissant
                  </option>
                  <option className="optionitem" value="shoes">
                    Decroissant
                  </option>
                </select>
              </div>
              <div className="col-lg-3 col-sm-12 w-100 ">
                <select
                  className="selectFilter"
                  onChange={this.handleSort}
                  name="gender"
                >
                  <option disabled selected value className="optionitem">
                    By Brand
                  </option>
                  <option className="optionitem" value="dress">
                    Croissant
                  </option>
                  <option className="optionitem" value="shoes">
                    Decroissant
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* productList */}
          <div className="nav-productList">
            {/* <ul className="nav-ul-container"> */}

            {/* </ul> */}
          </div>
          <ul className="row ul-container ">
            {filteredArray.map(oneProduct => {
              // console.log(filteredArray);
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
