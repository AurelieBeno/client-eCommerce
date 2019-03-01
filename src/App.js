import React, { Component } from "react";

// import axios from "axios";

// import { Switch, Route, NavLink, Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

import "./App.css";
import Header from "./components/header/Header";

class App extends Component {
  constructor(props) {
    super(props);

    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }
    this.state = { currentUser: userInfo };
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

  // logoutClick() {
  //   // Logout to the backend
  //   getLogOut().then(response => {
  //     console.log("Log out", response.data);
  //     // set the currentUser state to empty
  //     this.updateUser(null);
  //   });
  // }

  render() {
    return (
      <header className="App-header">
        <Header />
      </header>
    );
  }
}

export default App;
