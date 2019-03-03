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
      <section className="LoginForm-container container">
        {/* <div className="container"> */}
        <div className="row">
          <h5 className="titleform title col-sm-12">
            Connection avec une adresse e-mail
          </h5>
        </div>

        <form
          // className="formContainer"
          onSubmit={event => this.handleSubmit(event)}
        >
          <div
            className="container"
            //  className="container formContainer"
          >
            <div className="form-group ">
              <div className="row">
                <label
                  className="labelForm col-sm-6"
                  htmlFor="exampleInputEmail1"
                >
                  Email :
                </label>
              </div>
              <div className="row ">
                <input
                  onChange={event => this.genericOnChange(event)}
                  value={this.state.email}
                  name="email"
                  type="email"
                  placeholder="blah@blah.com"
                  className="form-control inputSignup "
                  id="exampleInputEmail1"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="labelForm" htmlFor="exampleInputPassword1">
                Password :
              </label>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.originalPassword}
                name="originalPassword"
                type="password"
                className="form-control inputSignup"
                id="exampleInputPassword1"
              />
            </div>
            <button className="btn signBtn submitBtn col-7 logBtn">
              Log In
            </button>
          </div>
        </form>
        {/* </div> */}
      </section>
    );
  }
}

export default LoginForm;
