import React, { Component } from "react";
import "./Style/UserAccount.css";

import { Link, Redirect } from "react-router-dom";

class UserAccount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  logOutClick(event) {
    this.setState({ currentUser: null });
  }
  render() {
    const { currentUser } = this.props;
    console.log("CURRENT USER", currentUser);

    if (currentUser === null) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12 bigImg">
              <img src="../images/userAccount.jpg" alt="cooluser" />
            </div>
          </div>
        </div>

        <div className="container container-middle">
          <div className="row">
            {/* <div className="offset-2" /> */}
            <div className="col-12 text-center">
              <h3>WELCOME, {currentUser.firstName} :)</h3>

              <h6>
                Happy Shopping with ASOS <span>❤️</span>
              </h6>
              <div className="row text-center d-flex justify-content-center m-auto">
                <div className="col-lg-3 col-sm-12 marginAround">
                  <button
                    type="button"
                    className=" start btn btn-outline-dark signBtn deleteHover"
                  >
                    <Link to="/product">Start Shopping</Link>
                  </button>
                </div>
                <div className="col-lg-3 col-sm-12  marginAround">
                  <button
                    type="button"
                    className="btn signBtn submitBtn deleteHover"
                    // btn-dark
                    onClick={() => this.props.logoutClick()}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserAccount;
