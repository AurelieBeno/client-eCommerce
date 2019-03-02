import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

// import "./SignupForm.css";

import "./LogOrSign.css";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

class LogOrSign extends Component {
  render() {
    return (
      <div className="Signup-container">
        <div className="testContainer container">
          <div className="row testRow">
            <div className="col-6 premier">
              <Link to="/logOrSign/signup">Nouveau chez asos ?</Link>
            </div>
            <div className="col-6 second">
              <Link to="/logOrSign/login">Connectez-vous !</Link>
            </div>
          </div>
        </div>

        {/* // <div className="containerLogOrSign"> */}
        {/* <div className="Signup-container">
          <div className="rowContainer">
            <div className="container">
              <div className="row">
                <div className="Signup-title title un col-6">
                  <Link className="nav-link col-6" to="/logOrSign/signup">
                    Nouveau chez asos ?
                  </Link>
                </div>
                <div className="Signup-title deux title col-6">
                  <Link className="nav-link " to="/logOrSign/login">
                    Connectez-vous !
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
