import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { getProductDetails, addProduct } from "../api.js";

import "./ProductDetails.css";
import Order from "./Order.js";

var texts = ["S", "M", "L"];
class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productItem: {
        size: []
      },
      clickedText: "",
      isRedirect: false
    };
  }

  cartClick = () => {
    // console.log(this.state.productItem._id);
    addProduct(this.state.productItem._id).then(response => {
      console.log("Add to bag", response.data);
      this.setState({ isRedirect: true });
    });
  };

  handleClick = i => {
    this.setState({ clickedText: texts[i] });
  };
  componentDidMount() {
    const { params } = this.props.match;
    window.scrollTo(0, 0);

    getProductDetails(params.productId).then(response => {
      console.log("Product Details", response.data);
      this.setState({ productItem: response.data });
    });
  }
  render() {
    const { isRedirect } = this.state;
    // redirect user to product list after click add to cart
    if (isRedirect) {
      return <Redirect to="/check-out" />;
    }
    const { productItem } = this.state;
    console.log(productItem);
    return (
      <section className="product-detail-container container">
        <div className="row">
          <div className="image-detail  col-lg-6 col-md-12 col-sm-12">
            <img
              className="w-100"
              src={productItem.baseImageUrl}
              alt="First slide"
            />
          </div>
          <div className="description-detail col-lg-6 col-md-12 col-sm-12">
            <h4 className="nameProductDetail">{productItem.name}</h4>
            <div className="priceContainer">
              <span className="price"> {productItem.price} $</span>
              <small>Free Shipping Worldwide *</small>
            </div>
            <div className="detail-color">
              <p className="color">
                <span>Colour: </span> {productItem.colour}
              </p>
            </div>

            <div className="size">
              <p className="sizeP">Size</p>
              <small>
                <a href="#!"> Find your size</a>
              </small>
            </div>
            <div className="drop">
              <div>
                <select
                  className=" lt-04 btn selectSizeBtn"
                  name="sizeList"
                  form="formSize"
                  onClick={() => this.handleClick()}
                >
                  <option disabled selected value>
                    Select your size
                  </option>
                  {productItem.size.map((oneSize, index) => {
                    console.log(index, oneSize);
                    return (
                      <option className="optionSize" value="text">
                        {oneSize}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="btn-container">
              <button
                onClick={() => this.cartClick()}
                type="button"
                className="btn btn-success add-cart"
              >
                ADD TO BAG
              </button>

              {/* <button type="button" className="btn btn-success add-cart">
                <Link to="/check-out">CHECK OUT</Link>
              </button> */}
            </div>
          </div>
          <Switch>
            <Route path="/check-out" component={Order} />
          </Switch>
          <div className="container">
            <div className=" row secondRowTest">
              <div className="col-4 second-detailUn">
                <h4>Product Details</h4>
                <p> {productItem.brand}</p>
                <ul>
                  <li>blahblahblah</li>
                  <li>blahblahblah</li>
                  <li>blahblahblah</li>
                </ul>
              </div>
              <div className="col-4 second-detailDe">
                <h4>product code</h4>
                <p className="productCode"> {productItem.productId} </p>
                <h4>brand</h4>
                <p>Blahblahblhablha</p>
              </div>
              <div className="col-4 second-detailTrois">
                <h4>look after me</h4>
                <p>Blahblhablha</p>

                <h4>About me</h4>
                <p>blahblhablhablhablhablhablhablhablha</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
