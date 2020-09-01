import React from "react";
import Head from "../header";
import Footer from "../footer";
import "./CSS/aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "../preloader";

function AboutUs() {
  AOS.init();
  document.title = "Darkbank | About us";
  return (
    <div>
      <Preloader/>
      <Head />
      <div className="about-container">
        <div className="about-banner fadeIn">
          <div>
            <hr style={{ marginTop: "0em" }} />

            <div className="darkbank-logo">
              <img
                src="https://darkbank.io/img/security-logo.png"
                alt="DarkBank"
                className="darkbank"
              />
            </div>

            <div className="aboutus">ABOUT US</div>
            <div className="home-aboutus">
              <span>HOME</span>
              <i
                className="fa fa-angle-right"
                style={{
                  marginLeft: "0.3em",
                  marginRight: "0.3em",
                  fontSize: "1.3em"
                }}
              ></i>
              <span>ABOUT US</span>
            </div>
          </div>
        </div>

        <div className="about-darkweb" data-aos="fade-out" aos-duration="1000">
          <p className="darkweb">DARK BANK</p>
          <div className="about-content">
            <p>Lorem ispumf fhhhhhhhhhhhhhhhhhhhhh</p>
            <p>Lorem ispumf fhhhhhhhhhhhhhhhhhhhhh</p>
            <p>Lorem ispumf fhhhhhhhhhhhhhhhhhhhhh</p>
            <p>Lorem ispumf fhhhhhhhhhhhhhhhhhhhhh</p>
            <p>Lorem ispumf fhhhhhhhhhhhhhhhhhhhhh</p>
            <p>Lorem ispumf fhhhhhhhhhhhhhhhhhhhhh</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutUs;
