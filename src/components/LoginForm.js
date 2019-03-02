import React, { Component } from "react";

import { postLogIn } from "../api.js";

import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      originalPassword: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Submit login info to the backend
    postLogIn(this.state).then(response => {
      console.log("Log In", response.data);
      this.props.loginSuccess(response.data);
    });
  }

  render() {
    return (
      <section className="LoginForm-container">
        <h5 className="titleform">Connection avec une adresse e-mail</h5>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group form-container">
            <label htmlFor="exampleInputEmail1" className="labelForm">
              Email :
            </label>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.email}
              name="email"
              type="email"
              placeholder="blah@blah.com"
              className="form-control controlLog"
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group form-container">
            <label htmlFor="exampleInputPassword1" className="labelForm">
              Password :
            </label>
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.originalPassword}
              name="originalPassword"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button className="btn signBtn submitBtn">Log In</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
