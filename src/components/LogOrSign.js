import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

// import "./SignupForm.css";

import "./LogOrSign.css";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import UserAccount from "./UserAccount";

class LogOrSign extends Component {
  render() {
    const { currentUser } = this.props;

    console.log(currentUser);

    return (
      <div>
        <div
          className="Signup-container 
        container LogOrSign-container"
        >
          <div className="testContainer container">
            <div className="row testRow">
              <div className="col-lg-6 col-sm-12 premier ">
                <Link className="Link" to="/logOrSign/signup">
                  Nouveau chez asos ?
                </Link>
              </div>
              <div className="col-lg-6 col-sm-12 second">
                <Link className="Link" to="/logOrSign/login">
                  Connectez-vous !
                </Link>
              </div>
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
