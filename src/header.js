import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from "./logo.svg";

import "./App.css";

function Head(props) {
  var [navBar, setPos] = useState(false);

  function menuNavBar() {
    var setValue = 1;

    if (navBar === false) {
      document.getElementById("menu").style.display = "initial";
      document.getElementById("header").style.backgroundColor =
        "rgba(255,255,255,1)";
      document.getElementById("hamburgClose").style.display = "initial";
      document.getElementById("hamburg").style.display = "none";
      document.getElementById("logo-darkbank").style.display = "initial";
      document.getElementById("logo-darkbank2").style.display = "none";

      setPos(true);
    } else {
      document.getElementById("menu").style.display = "none";

      if (document.documentElement.scrollTop > 5) {
        document.getElementById("header").style.backgroundColor =
          "rgba(255,255,255,1)";
        document.getElementById("logo-darkbank").style.display = "initial";
        document.getElementById("logo-darkbank2").style.display = "none";
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("logo-darkbank").style.display = "none";
        document.getElementById("logo-darkbank2").style.display = "initial";
      }

      document.getElementById("hamburgClose").style.display = "none";
      document.getElementById("hamburg").style.display = "initial";

      setPos(false);
    }
  }

  function Dev() {
    window.location = "/developer/";
    // alert("hey");
  }

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 5) {
      document.getElementById("header").style.backgroundColor =
        "rgba(255,255,255,1)";
      document.getElementById("hamburg").style.color = "rgba(1,6,15,0.8)";
      document.getElementById("hd1").style.color = "rgba(1,6,15,0.8)";
      document.getElementById("hd2").style.color = "rgba(1,6,15,0.8)";
      document.getElementById("hd3").style.color = "rgba(1,6,15,0.8)";
      document.getElementById("hd4").style.color = "rgba(1,6,15,0.8)";
      document.getElementById("logo-darkbank").style.display = "initial";
      document.getElementById("logo-darkbank2").style.display = "none";
    } else {
      if (navBar === false) {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("logo-darkbank").style.display = "none";
        document.getElementById("logo-darkbank2").style.display = "initial";
      } else {
        document.getElementById("header").style.backgroundColor =
          "rgba(255,255,255,1)";
        document.getElementById("logo-darkbank").style.display = "initial";
        document.getElementById("logo-darkbank2").style.display = "none";
      }

      document.getElementById("hamburg").style.color = "rgba(255,255,255,1)";
      document.getElementById("hd1").style.color = "rgba(255,255,255,1)";
      document.getElementById("hd2").style.color = "rgba(255,255,255,1)";
      document.getElementById("hd3").style.color = "rgba(255,255,255,1)";
      document.getElementById("hd4").style.color = "rgba(255,255,255,1)";
    }

    if (document.documentElement.scrollTop > 200) {
      document.getElementById("header").style.boxShadow =
        "2px 1px 8px rgba(10, 10, 10, 0.5), 2px 2px 0px rgba(255,255,255,1)";
    } else {
      document.getElementById("header").style.boxShadow = "none";
    }
  }

  return (
    <div>
      <div className="header-bar">
        <header className="headerg" id="header">
          <div className="logo">
            <span className="logo1">
              <img
                src="https://darkbank.io/img/security-logo.png"
                alt="DarkBank"
                className="logo-darkbank"
                id="logo-darkbank"
              />
            </span>

            <span className="logo1">
              <img
                src="https://darkbank.io/img/security-logo.png"
                alt="DarkBank"
                className="logo-darkbank2"
                id="logo-darkbank2"
              />
            </span>
          </div>
          <div className="hd-col">
            <Link to="/" className="hd" id="hd1">
              Home
            </Link>
            <Link to="/aboutus/" className="hd" id="hd2">
              About Us
            </Link>
            <Link to="/blog/" className="hd" id="hd3">
              Blog
            </Link>
            <Link to="/developer/" className="hd" id="hd4">
              Developer
            </Link>
          </div>

          <div className="hamburg" id="hamburg" onClick={menuNavBar}>
            <i className="fa fa-bars" style={{ fontSize: "2em" }}></i>
          </div>

          <div className="close" id="hamburgClose" onClick={menuNavBar}>
            <div class="cancel-icon">
              <div className="cancel"></div>
            </div>
          </div>
        </header>

        <div className="menu" id="menu">
          <div className="navbark" id="navbar">
            <div className="nav-in fadeIn2">
              <div>
                <Link to="/" className="hdm">
                  HOME
                </Link>
              </div>
              <div>
                <Link to="/aboutus/" className="hdm">
                  ABOUT US
                </Link>
              </div>
              <div>
                <Link to="/blog/" className="hdm">
                  BLOG
                </Link>
              </div>
              <div>
                <button
                  to="/developer/"
                  className="developer hdm"
                  style={{ color: "rgba(255,255,255,1)" }}
                  onClick={Dev}
                >
                  DEVELOPER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
