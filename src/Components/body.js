import React from "react";
import Head from "../header";
import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/body.css";
import Preloader from "../preloader";

import { Helmet } from "react-helmet";
import "../bannerAnimate/demo/assets/css/style.css";
import "../bannerAnimate/demo/assets/css/responsive.css";
import "../bannerAnimate/demo/assets/css/animate.css";
import "../bannerAnimate/demo/assets/bootstrap/css/bootstrap.min.css";
import "../bannerAnimate/demo/assets/css/ionicons.min.css";
// import "../bannerAnimate/demo/assets/css/ionicons.min.css";
import appStore from "../Components/img/appStore.png";
import googleStore from "../Components/img/googleStore.png";

function Home() {
  AOS.init();

  document.title =
    "DarkBank | The First African Security and Connectivity Company";
  function getStarted() {
    window.location = "/auth/register/";
  }
  return (
    <div>
      {/* data-aos="zoom-out" */}
      <Preloader />
      <Head />

      <div>
        <section id="home" className="banner_section banner">
          <div id="banner_bg_effect" className="banner_effect"></div>
          <div
            className="container explore1"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <div className="slider-titles">
              {/* <div className="table-cells" style={{ marginTop: "-3em" }}> */}
              <div>.</div>
              <div className="central">
                <h4 className="slider-animation-ups test1 explored">
                  EXPLORE AND SECURE
                </h4>
                <h4 className="slider-animation-ups test2 explored">
                  CONNECTIVITY
                </h4>

                <div className="home-btn-class button-group slider-animation-up">
                  <button
                    className="home-btn btn-normal-border"
                    onClick={getStarted}
                  >
                    Get Started
                  </button>
                </div>
                {/* </div> */}
                {/* <div
                  className="button-group slider-animation-up"
                  style={{ textAlign: "center", marginTop: "1em" }}
                >
                  <a className="btn btn-normal-border" href="register/">
                    Get Started
                  </a>

                  <a
                    className="btn btn-normal-border"
                    href="signin/"
                    style={{ marginLeft: "1em" }}
                  >
                    Sign In
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                "url('bannerAnimate/demo/assets/images/banner_wave.png')"
            }}
            className="section_wave"
          ></div>
        </section>

        {/* <section
          id="home"
          className="banner_section section_gradiant_dark"
          style={{
            backgroundImage: "linear-gradient(-90deg,rgb(0,0,30), rgb(0,0,30))"
          }}
        >
          <div id="banner_bg_effect" className="banner_effect"></div>
          <div className="container">
            <div className="slider-title">
              
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('bannerAnimate/demo/assets/images/banner_wave.png')"
            }}
            className="section_wave"
          ></div>
        </section>  data-aos="fade-out" aos-duration="500"*/}
        <div className="bodyBanner">
          <div className="ourservices image-fix">
            {/* <div
            style={{
              backgroundImage:
                "url('bannerAnimate/demo/assets/images/wave.png')"
            }}
            className="section_wave1"
          ></div> */}
            <div className="services">Why Dark Bank?</div>
            <div className="serv">
              We offer the following services at DarK BanK.
            </div>

            <div className="container blog-cover">
              <div className="row mt-3">
                <div
                  className="col-sm-12 col-lg-4 col-xl-4 col-md-12 blog-inner"
                  data-aos="zoom-in"
                  aos-duration="5000"
                >
                  <div className="card bounce-card">
                    <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12 flip-card  cardContainer">
                      <div className="image flip-card-inner">
                        <div className="flip-card-front">
                          .
                          <div className="icon1">
                            <i className="fa fa-lock"></i>
                          </div>
                          <div className="item1">Improving Security</div>
                          <div className="item2">
                            We help in penetration testing
                          </div>
                        </div>

                        <div className="flip-card-back1">
                          .
                          <div className="itemBack">
                            <li>Content Team 1</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 2</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 3</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 4</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-12 col-lg-4 col-xl-4 col-md-12 blog-inner"
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="card bounce-card2">
                    <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12 flip-card  cardContainer">
                      <div className="image2 flip-card-inner">
                        <div className="flip-card-front">
                          .
                          <div className="icon1">
                            <i className="fa fa-shield"></i>
                          </div>
                          <div className="item1">Privatization</div>
                          <div className="item2">
                            We help tu further decentralize you
                          </div>
                        </div>

                        <div className="flip-card-back1">
                          .
                          <div className="itemBack">
                            <li>Content Team 5</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 6</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 7</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 8</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-12 col-lg-4 col-xl-4 col-md-12 blog-inner"
                  data-aos="zoom-in"
                  aos-duration="5000"
                >
                  <div className="card bounce-card">
                    <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12 flip-card  cardContainer">
                      <div className="image3 flip-card-inner">
                        <div className="flip-card-front">
                          .
                          <div className="icon1">
                            <i className="fa fa-mobile"></i>
                          </div>
                          <div className="item1">Mobile Trading</div>
                          <div className="item2">
                            We help to further your financial mobile trading
                          </div>
                        </div>

                        <div className="flip-card-back1">
                          .
                          <div className="itemBack">
                            <li>Content Team 9</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 10</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 11</li>
                          </div>
                          <div className="itemBack">
                            <li>Content Team 12</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="section_wave1"
              style={{
                backgroundImage:
                  "url('bannerAnimate/demo/assets/images/wave.png')"
              }}
            ></div>
          </div>

          {/* Tools Section */}

          <div
            className="ourservices toolSection"
            data-aos="fade-out"
            aos-duration="1000"
          >
            {/* <div
            style={{
              backgroundImage:
                "url('bannerAnimate/demo/assets/images/wave.png')"
            }}
            className="section_wave1"
          ></div> */}
            <div>.</div>
            <div className="services tools">TOOLS</div>
            <div className="container">
              <div className="row mt-3">
                <div
                  className="col-sm-12 col-lg-6 col-xl-6 col-md-6"
                  data-aos="zoom-in"
                  aos-duration="5000"
                >
                  <div className="tool-card">
                    <div>.</div>
                    <div className="tool-name">Dark Bank App</div>
                    <div className="downloadStore">
                      <a href="darkbank">
                        <img
                          src={appStore}
                          alt="App Store"
                          className="appStore"
                        />
                      </a>
                      <a href="darkbank">
                        <img
                          src={googleStore}
                          alt="Play Store"
                          className="appStore play"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-12 col-lg-6 col-xl-6 col-md-6"
                  data-aos="zoom-in"
                  aos-duration="5000"
                >
                  <div className="tool-card">
                    <div>.</div>
                    <div className="tool-name">Dark Net App</div>
                    <div className="downloadStore">
                      <a href="darkbank">
                        <img
                          src={appStore}
                          alt="App Store"
                          className="appStore"
                        />
                      </a>
                      <a href="darkbank">
                        <img
                          src={googleStore}
                          alt="Play Store"
                          className="appStore play"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="section_wave1"
              style={{
                backgroundImage:
                  "url('bannerAnimate/demo/assets/images/wave.png')"
              }}
            ></div>
          </div>
        </div>
        <div className="ourservices" data-aos="fade-out" aos-duration="1000">
          <div className="services">GET IN TOUCH</div>
          <div className="contact-container">
            <div className="image-card" data-aos="zoom-in" aos-duration="5000">
              <div>.</div>
              <div className="contactUs">CONTACT US</div>
              <div className="reachout">You can reach us via</div>
              <div className="reachout-addr">
                <i className="fa fa-envelope"></i> admin@darkbank.io
              </div>
            </div>
            <div
              className="contact-card"
              data-aos="zoom-in"
              aos-duration="5000"
            >
              <div className="hide">.</div>
              <div
                className="displayText"
                style={{ fontWeight: "500", marginTop: "-1em" }}
              >
                Do you wish to reach out to us?
              </div>

              <div className="contact-box">
                <div className="box-title">Full name</div>
                <div>
                  <input type="text" className="contact-input" />
                </div>

                <div className="box-title">Email which we can reach out to</div>
                <div>
                  <input type="text" className="contact-input" />
                </div>

                <div className="box-title">Subject of Message</div>
                <div>
                  <input type="text" className="contact-input" />
                </div>

                <div className="box-title">Message To Send</div>
                <div>
                  <input type="text" className="contact-input" />
                </div>
              </div>
              <div>
                <button className="contact-btn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Helmet>
        {/* <script src="../js/jquery.min.js"></script> */}

        {/* <script src="../js/jquery.easypiechart.min.js"></script> */}

        {/* <script src="../js/particles.min.js"></script>

        <script src="../js/app.js"></script> */}

        <script src="../bannerAnimate/demo/assets/js/jquery-1.12.4.min.js"></script>

        <script src="../bannerAnimate/demo/assets/bootstrap/js/bootstrap.min.js"></script>

        <script src="../bannerAnimate/demo/assets/owlcarousel/js/owl.carousel.min.js"></script>
        {/* <!-- magnific-popup min js  --> */}
        <script src="../bannerAnimate/demo/assets/js/magnific-popup.min.js"></script>
        {/* <!-- waypoints min js  --> */}
        <script src="../bannerAnimate/demo/assets/js/waypoints.min.js"></script>
        {/* <!-- parallax js  --> */}
        <script src="../bannerAnimate/demo/assets/js/parallax.js"></script>
        {/* <!-- countdown js  --> */}
        <script src="../bannerAnimate/demo/assets/js/jquery.countdown.min.js"></script>
        {/* <!-- particles min js  --> */}
        <script src="../bannerAnimate/demo/assets/js/particles.min.js"></script>
        {/* <!-- chart js  --> */}
        <script src="../bannerAnimate/demo/assets/js/chart.bundle.js"></script>
        <script src="../bannerAnimate/demo/assets/js/chart.piecelabel.min.js"></script>
        <script src="../bannerAnimate/demo/assets/js/chart_script.js"></script>
        {/* <!-- scripts js --> */}
        <script src="../bannerAnimate/demo/assets/js/scripts.js"></script>

        {/* <script src="../js/custom.js"></script> */}
      </Helmet>
    </div>
  );
}

export default Home;
