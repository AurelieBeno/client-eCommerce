import React, { Component } from "react";
import logo from "./logo.svg";

import axios from "axios";

import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get(
        "https://asos2.p.rapidapi.com/products/list?currency=USD&sizeSchema=US&sort=freshness&lang=en-US&country=US&store=2&categoryId=27871&limit=150&offset=0",
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
      // .catch(error => {
      //   console.log(error);
      // });
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
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
