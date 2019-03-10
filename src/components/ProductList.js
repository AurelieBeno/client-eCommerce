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
    if (
      oldProps.productArray.length === 0 &&
      this.props.productArray.length > 0
    ) {
      this.setState({
        filteredArray: this.props.productArray
      });
    }
  }

  handleChangeType = event => {
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

  // handleSort = event => {
  //   const { value } = event.target;
  //   let priceArray;
  //   if (value === "Croissant") {
  //     priceArray = this.props.productArray.sort(function(a, b) {
  //       return a.productArray.price - b.productArray.price;
  //     });
  //   } else if (value === "Decroissant") {
  //     priceArray = this.props.productArray.sort(function(a, b) {
  //       return b.productArray.price - a.productArray.price;
  //     });
  //   }
  //   this.setState({ price: value, filteredArray: priceArray });
  // };

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

  handleSort = event => {
    const { value } = event.target;

    // console.log("VALUE SORT", value);
    // console.log("HandleSort ", this.props.productArray);
    let priceArray;
    // let SortArray;
    if (value === "Ascending") {
      priceArray = this.props.productArray
        .filter(product => product.price)
        .sort((a, b) => a.price - b.price);
    } else if (value === "Descending") {
      priceArray = this.props.productArray
        .filter(product => product.price)
        .sort((a, b) => b.price - a.price);
    }
    //*********  FILTER PRICE OK *********** */
    // priceArray = this.props.productArray.filter(function(product) {
    //   console.log("PRODUCT PRICE", product.price);

    //   return product.price;
    // });
    //*************************************************** */
    // SortArray = priceArray.sort((a, b) => {
    //   console.log("SORT ARRAY", SortArray);
    //   return a - b;
    // });

    // ************** sort ok ********
    // priceArray = this.props.productArray.map(function(oneProduct) {
    //   return oneProduct.price;
    // });
    // priceArray.sort((a, b) => {
    //   return a - b;
    // });

    console.log("PRICE ARRAY", priceArray);
    this.setState({ filteredArray: priceArray });
  };

  render() {
    const { filteredArray } = this.state;

    //console.log(this.props.productArray, "here on productList");
    // console.log(this.state);

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
                  onChange={this.handleChangeType}
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
                  <option className="optionitem" value="Ascending">
                    Ascending
                  </option>
                  <option className="optionitem" value="Descending">
                    Descending
                  </option>
                </select>
              </div>

              {/* <div className="col-lg-3 col-sm-12 w-100 ">
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
              </div> */}
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
