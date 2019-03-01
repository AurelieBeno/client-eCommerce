import React, { Component } from "react";
import "./SignupForm.css";

import SignupForm from "./SignupForm";

import LoginForm from "./LoginForm";
import { Switch, Route, Link } from "react-router-dom";

class LogOrSign extends Component {
  render() {
    return (
      <div className="containerLogOrSign">
        <div className="Signup-container">
          <div className="row">
            <div className="Signup-title title">
              <Link className="nav-link" to="/logOrSign/signup">
                <p className="paraSignup"> Nouveau chez asos ?</p>{" "}
              </Link>
            </div>
            <div className="Signup-title title">
              <Link className="nav-link" to="/logOrSign/login">
                <p className="paraSignup"> Connectez-vous !</p>{" "}
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route
            path="/logOrSign/signup"
            render={() => {
              return (
                <SignupForm
                  currentUser={this.props.currentUser}
                  // send App update user ()
                  signupSuccess={user => this.props.signupSuccess(user)}
                />
              );
            }}
          />
          <Route
            path="/logOrSign/login"
            render={() => {
              return (
                <LoginForm
                  currentUser={this.props.currentUser}
                  loginSuccess={user => this.props.loginSuccess(user)}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default LogOrSign;
