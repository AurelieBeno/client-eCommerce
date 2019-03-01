import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";

import "./SignupForm.css";

// import LoginPage from "./components/LoginForm";
import { postSignup } from "../api.js";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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

    // Send the user info to the backend
    postSignup(this.state).then(response => {
      console.log(("Sign Up Result", response.data));
      this.props.signupSuccess(response.data);
    });
  }

  render() {
    return (
      <div className="SignupForm">
        <div>
          <p> NOUVEAU CHEZ ASOS ?</p>
          <h5>Inscrivez-vous à l'aide de votre adresse E-mail</h5>
        </div>
        <form className="signup" onSubmit={event => this.handleSubmit(event)}>
          <label>Email</label>
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.email}
            name="email"
            type="email"
            placeholder="blah@blah.com"
          />

          <label>First Name</label>
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.firstName}
            name="firstName"
            type="text"
            placeholder=""
          />

          <label>Last Name</label>
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.lastName}
            name="lastName"
            type="text"
            placeholder=""
          />

          <label>Password</label>
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.orginalPassword}
            name="originalPassword"
            type="password"
          />
          <div>
            <p>
              En créant votre compte, vous acceptez nos
              <span>termes et condition</span>&{" "}
              <span>politique de confidentialité</span>
            </p>
          </div>
          <button>REJOIGNEZ ASOS</button>
        </form>
        {/* <Link className="nav-link" to="/login">
          Login
        </Link>
        <Switch>
          <Route
            path="/login-page"
            render={() => {
              return (
                <LoginPage
                  currentUser={this.state.currentUser}
                  loginSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
        </Switch> */}
      </div>
    );
  }
}

export default SignupForm;
