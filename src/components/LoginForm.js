import React, { Component } from "react";

import { postLogIn } from "../api.js";

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
      <section className="SignupForm">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Email
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.email}
              name="email"
              type="email"
              placeholder="blah@blah.com"
            />
          </label>
          <label>
            Password
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.originalPassword}
              name="originalPassword"
              type="password"
            />
          </label>

          <button>Log In</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
