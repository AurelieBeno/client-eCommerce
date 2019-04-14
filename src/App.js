import React, { Component } from "react";

// import axios from "axios";

import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Women from "./components/header/Women";
import Men from "./components/header/Men";
import Offers from "./components/Offers";
import HomePage from "./components/HomePage";
import LogOrSign from "./components/LogOrSign";
import NotFound from "./components/NotFound";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Order from "./components/Order";
import UserAccount from "./components/UserAccount";
import AfterPayement from "./components/AfterPayement.js";

import { getProductList, getLogOut } from "./api.js";

class App extends Component {
  constructor(props) {
    super(props);

    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }
    this.state = {
      currentUser: userInfo,
      productArray: []
    };
  }
  updateUser(newUser) {
    if (newUser) {
      // save the user info in localStorage if we are login in4
      //( Turn it into a JSON string before we save)
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      // Delete the user info from localStorage if we are logging off
      localStorage.removeItem("currentUser");
    }

    this.setState({ currentUser: newUser });
  }

  componentDidMount() {
    getProductList().then(response => {
      this.setState({ productArray: response.data });
    });
  }

  logoutClick() {
    // Logout to the backend
    console.log("something happened");

    getLogOut().then(response => {
      console.log("Log out", response.data);
      // set the currentUser state to empty
      this.updateUser(null);
    });
  }

  render() {
    console.log(this.state.productArray, "hello State in App.js");
    return (
      <header className="App-header">
        <div>
          <Header currentUser={this.state.currentUser} />
        </div>

        <div>
          <Offers />
        </div>

        {/* <ProductDetail /> */}
        {/* <ProductList /> */}

        {/* <HomePage /> */}

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} />
          <Route path="/offers" component={Offers} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/check-out" component={Order} />
          <Route path="/afterPayement" component={AfterPayement} />

          <Route
            path="/product"
            render={() => {
              return <ProductList productArray={this.state.productArray} />;
            }}
          />
          <Route path="/women/product" component={ProductList} />
          {/* <Route
            path="/women/product"
            render={() => {
              return <ProductList productArray={this.state.productArray} />;
            }}
          /> */}
          <Route
            path="/user-account"
            render={() => {
              return (
                <UserAccount
                  logoutClick={() => this.logoutClick()}
                  currentUser={this.state.currentUser}
                  logoutSuccess={user => this.updateUser(null)}
                />
              );
            }}
          />

          {/* {this.state.currentUser ? (
          <button onClick={() => this.logoutClick()}>log out</button>
        ) : null} */}

          <Route
            path="/logOrSign"
            render={() => {
              return (
                <LogOrSign
                  currentUser={this.state.currentUser}
                  signupSuccess={user => this.updateUser(user)}
                  loginSuccess={user => this.updateUser(user)}
                  logoutClick={event => this.logoutClick(event)}
                />
              );
            }}
          />
          {/* <Route path="/product/detail" component={ProductDetail} /> */}

          <Route component={NotFound} />
        </Switch>

        <Footer />
      </header>
    );
  }
}

export default App;
