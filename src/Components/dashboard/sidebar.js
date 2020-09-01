import React from "react";
import "./CSS/sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Component } from "react";

function SideBar() {
  // const getData = (sideBar) => {
  //   console.log("test")
  // }
  return (
    <div>
      
      <div className="sideBar" id="sideBar">
        <div className="logo">
          <span className="logo1">
            <img
              src="https://darkbank.io/img/security-logo.png"
              alt="DarkBank"
              className="logo-admin"
            />
          </span>
          <span className="darkbank-admin">DarkBank</span>
        </div>
        <hr className="hr-admin" />

        <div className="sideBarCon">
        <div style={{marginTop:"1em"}}>
            <Link className="sideBarItem" to="/" style={{color:"rgba(30, 30, 120, 1)",opacity:"1"}}>
              VISIT WEBSITE
            </Link>
          </div>
          <div style={{marginTop:"1em"}}>
            <Link className="sideBarItem" to="/admin/">
              DASHBOARD
            </Link>
          </div>
          <div style={{marginTop:"1em"}}>
            <Link className="sideBarItem" to="/admin/addBlog/">
              ADD A BLOG POST
            </Link>
          </div>
          <div style={{marginTop:"1em"}}>
            <Link className="sideBarItem" to="/admin/viewBlog/">
              VIEW BLOG POSTS
            </Link>
          </div>
          <div style={{marginTop:"1em"}}>
            <Link className="sideBarItem" to="/admin/editWebsite/">
              EDIT WEBSITE
            </Link>
          </div>
          <div style={{marginTop:"1em"}}>
            <Link className="sideBarItem" to="/admin/addJob/">
              ADD A JOB
            </Link>
          </div>
          
          <div style={{marginTop:"1em"}}>
            <Link className="sideBarItem" to="/admin/auth/" style={{color:"red",opacity:"1"}}>
              LOGOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
