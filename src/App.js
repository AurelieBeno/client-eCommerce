import React, { Component } from "react";

import axios from "axios";

import { Switch, Route, NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./App.css";
import Header from "./components/header/Header";

// .header(
//   "X-RapidAPI-Key",
//   "ef45fc4dc3mshdff74d51a8c42bdp113091jsn9b57133aa5bc"
// )
// .end(function(result) {
//   console.log(result.status, result.headers, result.body);
// });
class App extends Component {
  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://asos2.p.rapidapi.com/products/list?currency=USD&sizeSchema=US&sort=freshness&lang=en-US&country=US&store=2&categoryId=27871&limit=70&offset=0",
  //       {
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "ef45fc4dc3mshdff74d51a8c42bdp113091jsn9b57133aa5bc"
  //         }
  //       }
  //     )
  //     .then(response => {
  //       console.log(response.data);
  //       response.json(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
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
      <header className="App-header">
        <Header />
      </header>
    );
  }
}

export default App;

{
  /* <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbnpar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>

        <br />
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar> */
}

{
  /* <img src="../public/images/asos.png" alt="logo" /> */
}
