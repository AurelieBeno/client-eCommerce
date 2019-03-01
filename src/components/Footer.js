import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small unique-color-dark">
        <div className="top-footer">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0">Medias</h6>
              </div>
              <div className="col-md-6 col-lg-7 text-center text-md-right">
                <h6 className="mb-0">Medias</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">
                HELP & INFORMATION
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="https://www.asos.com/customer-service/customer-care/help/?help=/app/home/country/gb">
                  Help
                </a>
              </p>
              <p>
                <a href="https://my.asos.com/identity/login?signin=d6e7771073723cdf68ceefeeeb4523e5">
                  Track Order
                </a>
              </p>
              <p>
                <a href="https://www.asos.com/customer-service/delivery/">
                  Delivery & Returns
                </a>
              </p>
              <p>
                <a href="https://www.asos.com/customer-service/premier-delivery/">
                  Premier Delivery
                </a>
              </p>
              <p>
                <a href="https://www.asos.com/discover/students/asos-on-campus/student-validation/">
                  10% Student Discount
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">ABOUT ASOS</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="https://www.asos.com/about/">About Us</a>
              </p>
              <p>
                <a href="https://asoscareers.asos.com/">Careers at ASOS</a>
              </p>
              <p>
                <a href="https://www.asosplc.com/corporate-responsibility.aspx">
                  Corporate Responsibility
                </a>
              </p>
              <p>
                <a href="https://www.asosplc.com/">Investors Site</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">
                MORE FROM ASOS
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="https://www.asos.com/gift-vouchers/?ctaref=global%20footer|gift%20vouchers">
                  Gift vouchers
                </a>
              </p>
              <p>
                <a href="https://www.asos.com/discover/our-apps/">
                  Mobile and ASOS Apps
                </a>
              </p>
              <p>
                <a href="https://marketplace.asos.com/?ctaref=Global%20footer">
                  ASOS Marketplace
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">SHOPPING FROM</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />

              <p>
                <a href="#!">
                  You're in
                  <img src="#" alt="Uk" />{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
