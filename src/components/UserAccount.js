import React, { Component } from "react";
import "./UserAccount.css";

import { Link } from "react-router-dom";

class UserAccount extends Component {
  // handleLogout(event) {
  //   event.preventDefault();

  //   // Submit logout info to the backend
  //   postLogOut(this.state).then(response => {
  //     console.log("Log Out", response.data);
  //     this.state.logoutSuccess(response.data);
  //     this.setState({ isSubmit: true });
  //   });
  // }

  logOutClick(event) {
    console.log(this.state);

    this.setState({ currentUser: null });
  }
  render() {
    const { currentUser } = this.props;
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
          <div className="row justify-content-around">
            {/* <div className="offset-2" /> */}
            <div className="col-lg-4">
              <h3>WELCOME, {currentUser.firstName} :)</h3>

              <h6>
                Happy Shopping with ASOS <span>❤️</span>
              </h6>

              <div className="container">
                <div className="row">
                  <div className="col">
                    <button
                      type="button"
                      className=" start btn btn-outline-dark signBtn deleteHover"
                    >
                      <Link to="/">Start Shopping</Link>
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="btn signBtn submitBtn deleteHover"
                      // btn-dark
                      onClick={() => this.logOutClick()}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div />

                <div />
              </div>
            </div>
            {/* <div className="offset-2" /> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default UserAccount;
