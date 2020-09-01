import React from "react";
import "./import.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div>
      <div className="" style={{ marginTop: "5em" }}>
        <footer className="page-footer font-small blue-grey lighten-5">
        <div className="container">
            <div className="row mt-1">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <hr className="hr-rule"/>
              </div>
            </div>
          </div>
          <div className="container text-center text-md-left mt-5">
            <div className="row mt-3 dark-grey-text">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2">
                <h6 className="footer-head">COMPANY</h6>

                <div className="footer-content">Team</div>
                <div className="footer-content">How We Work</div>
                <div className="footer-content">FAQ</div>
                <div className="footer-content">Terms of Service</div>
                <div className="footer-content">Privacy Policy</div>

              </div>

              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2">
                <h6 className="footer-head">CONTACT</h6>
                <div className="footer-content"><span className="foot-icon"><i className="fa fa-envelope foot-icon"></i></span>admin@darkbank.io</div>

              </div>

              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2">
                <h6 className="footer-head">ADDRESS</h6>
                <div className="footer-content"><span className="foot-icon"><i className="fa fa-map-marker foot-icon"></i></span>Behind SEET, FUTA,</div>
                <div className="footer-content">Akure, Ondo State,</div>
                <div className="footer-content">Nigeria.</div>
              </div>

              <div className="adjust-footer col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2">
                <h6 className="footer-head subscribe">SUBSCRIBE TO OUR NEWSLETTERS</h6>
                <div className="footer-content">
                  <input
                    className="footer-subscribe-input"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="footer-content footer-subscribe-btn-box">
                  <button className="footer-subscribe-btn">Send</button>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mt-10">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <hr className="hr-rule"/>
              </div>
            </div>
          </div>

          <div className="container text-center text-md-left">
            <div className="row mt-1">
              <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 footer-copyright adjust">
                © 2020 Copyright
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 footer-icon-con adjust">
                <span className="icon-cover"><i className="fa fa-facebook-square footer-icon"></i></span>
                <i className="fa fa-twitter-square footer-icon"></i>
                <i className="fa fa-google-plus-square footer-icon"></i>
                {/* <li class="animation" data-animation="fadeInUp" data-animation-delay="0.1s"><a href="#"><i class="ion-social-facebook"></i></a></li> */}

              </div>
            </div>
          </div>
          <div className="footer-dark"></div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
