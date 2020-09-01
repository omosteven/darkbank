import React, { Component, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import PreloaderAdmin from "../../preloader2";

function AdminHeader(props) {
  var [sideBar, sidePos] = useState(false);

  function sideBarNav() {
    if (sideBar === false) {
      document.getElementById("sideBar").style.display = "block";
      sidePos(true);
    } else {
      document.getElementById("sideBar").style.display = "none";
      sidePos(false);
    }
  }
  function sideBarBody() {
    if (sideBar === false) {
      document.getElementById("sideBar").style.display = "block";
      sidePos(true);
    } else {
      document.getElementById("sideBar").style.display = "none";
      sidePos(false);

    }
  }

  window.onscroll = function() {
    scrollWid();
  };

  function scrollWid() {
    // document.documentElement
    if (document.documentElement.scrollWidth < 467) {
      // alert("heyy")
    }
  }
  return (
    <div>
      <PreloaderAdmin/>
      <div className="header-bar" onClick={sideBarBody}>
        <header className="header1" id="header">
          {/* <div className="logo">
            <span className="logo1">
              <img
                src="https://darkbank.io/img/security-logo.png"
                alt="DarkBank"
                className="logo-admin"
              />
            </span>
            <span className="logo2" id="logo2">
              DarkBank
            </span>
          </div> */}
          <div className="menu-icon">
            <span>
              <i className="fa fa-bars" onClick={sideBarNav}></i>
            </span>
          </div>
          <div className="right-Nav">
            <i className="fa fa-user-circle"></i>
            <span style={{ marginLeft: "0.5em" }}>John Doe</span>
          </div>
        </header>
      </div>
    </div>
  );
}

export default AdminHeader;
