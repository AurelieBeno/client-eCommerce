import React, { Component } from "react";
import logo from "./logo.svg";

import axios from "axios";

import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get(
        "https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=jeans&sort=freshness&offset=0&limit=100&sizeschema=EU&currency=EUR",
        {
          headers: {
            "X-RapidAPI-Key":
              "ef45fc4dc3mshdff74d51a8c42bdp113091jsn9b57133aa5bc"
          }
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // unirest
  //   .get(
  //     "https://asos2.p.rapidapi.com/products/detail?sizeSchema=US&store=US&lang=en-US&currency=USD&id=<required>"
  //   )
  //   .header(
  //     "X-RapidAPI-Key",
  //     "ef45fc4dc3mshdff74d51a8c42bdp113091jsn9b57133aa5bc"
  //   )
  //   .end(function(result) {
  //     console.log(result.status, result.headers, result.body);
  //   });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
