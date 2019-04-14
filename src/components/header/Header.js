import React, { Component } from "react";

import { NavLink, Link, Switch, Route } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap"

import "./Header.css";

import "./SearchBar.css";
import Clothing from "./Clothing";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredArray: [],
      gender: ""
    };
  }

  componentDidMount() {
    this.setState({
      filteredArray: this.props.productArray
    });
  }

  handleChangeWoman() {
    // const { productArray } = this.state;

    let genderType = this.props.productArray;

    genderType = this.props.productArray.filter(type => {
      return type.gender === "Female";
    });

    this.setState({ filteredArray: genderType });
  }

  handleChangeMen() {
    // const { productArray } = this.state;

    let genderType = this.props.productArray;
    genderType = this.props.productArray.filter(type => {
      return type.gender === "Male";
    });
    this.setState({ filteredArray: genderType });
  }

  render() {
    const { currentUser } = this.props;

    // console.log("hello state header" + this.state);
    // const { filteredArray } = this.props.state;
    return (
      <div className="HeaderContainer ">
        <nav className="navbar container-fluide navbar-expand-lg navbar-dark bg-dark nav-container lt-04">
          <Link className="navbar-brand logo-img" to="/">
            <img className="logo" src="../images/logo.svg" alt="logo" />{" "}
          </Link>

          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto nav-header-ul-container">
              <li className="nav-item genderHeader">
                <NavLink
                  className="nav-link link-woman"
                  to="/product"
                  onClick={this.handleChangeWoman.bind(this)}
                  // value="women"
                >
                  Women
                </NavLink>
              </li>
              <li className="nav-item genderHeader">
                <NavLink
                  className="nav-link link-men "
                  to="/product"
                  // value="men"
                  onClick={this.handleChangeMen.bind(this)}
                >
                  Men
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 form-search-container">
              <div className="searchInput-container">
                <input
                  className=" form-control search-input mr-sm-2 searchBar col-12 search-media"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className=" btn btn-inline-success my-2 loupe my-sm-0"
                  type="submit"
                >
                  <img
                    className="search"
                    src="../images/search.svg"
                    alt="search"
                  />
                </button>
              </div>
            </form>

            <div>
              {/* <button className="btn  my-2 my-sm-0" type="submit"> */}
              {currentUser ? (
                <Link className="cartwhite my-2 my-sm-0" to="/check-out">
                  <i className="cartwhite fas fa-shopping-bag bagItem" />
                </Link>
              ) : (
                <Link className="cartwhite my-2 my-sm-0" to="/logOrSign/signup">
                  <i className="cartwhite fas fa-shopping-bag bagItems" />
                </Link>
              )}
              {/* </button> */}

              {/* <button className="btn  my-2 my-sm-0" type="submit"> */}
              {currentUser ? (
                <Link to="/user-account">
                  {" "}
                  <img
                    className="user"
                    src="../images/user.svg"
                    alt="logo"
                  />{" "}
                </Link>
              ) : (
                <Link className="btn my-2 my-sm-0" to="/logOrSign/signup">
                  <img className="user" src="../images/user.svg" alt="logo" />{" "}
                </Link>
              )}
              {/* </button> */}
            </div>
          </div>
        </nav>

        <nav className="navbar">
          <Clothing />
          <div />
        </nav>

        <Switch>
          <Route path="/clothing" component={Clothing} />
        </Switch>
      </div>
    );
  }
}

export default Header;
