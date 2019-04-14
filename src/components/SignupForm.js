import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";

import "./Style/SignupForm.css";

import { Redirect } from "react-router-dom";

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
      <section className="containerSign">
        <div className="Signup-container container ">
          <div className="LogOrSign-row">
            <div className="LogOrSign-col col-lg-8 col-md-8 col-sm-10 m-auto">
              <h5 className="titleSign ">
                Inscrivez-vous à l'aide de votre adresse E-mail
              </h5>

              <form
                className="signup"
                onSubmit={event => this.handleSubmit(event)}
              >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="labelForm">
                    Email
                  </label>
                  <input
                    onChange={event => this.genericOnChange(event)}
                    value={this.state.email}
                    name="email"
                    type="email"
                    placeholder="blah@blah.com"
                    className="form-control inputSignup lt-04"
                    id="exampleInputEmail1"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group">
                  <label className="labelForm">First Name</label>
                  <input
                    onChange={event => this.genericOnChange(event)}
                    value={this.state.firstName}
                    name="firstName"
                    type="text"
                    placeholder=""
                    className=" form-control inputSignup lt-04"
                  />
                </div>

                <div className="form-group">
                  <label className="labelForm">Last Name</label>
                  <input
                    onChange={event => this.genericOnChange(event)}
                    value={this.state.lastName}
                    name="lastName"
                    type="text"
                    placeholder=""
                    className=" form-control inputSignup lt-04"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="labelForm">
                    Password
                  </label>
                  <input
                    onChange={event => this.genericOnChange(event)}
                    value={this.state.orginalPassword}
                    name="originalPassword"
                    type="password"
                    className=" form-control  inputSignup lt-04"
                    id="exampleInputPassword1"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Password must contain 8 caracteres min
                  </small>
                </div>
                <div>
                  <small className="form-text ">
                    <p>
                      En créant votre compte, vous acceptez nos
                      <span className="spanLogin">
                        {" "}
                        termes et condition & politique de confidentialité
                      </span>
                    </p>
                  </small>
                </div>
                <div className="mySubBtn">
                  <button className="btn signBtn submitBtn deleteHover">
                    REJOIGNEZ ASOS
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignupForm;
