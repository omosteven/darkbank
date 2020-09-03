import React, { useState, useEffect } from "react";

import { BrowserRouter as Router} from "react-router-dom";

import "./App.css";

import PreloaderAdmin from "../../preloader2";

const axios = require("axios").default;

const AdminHeader = (props) => {

  var [sideBar, sidePos] = useState(false);

  const [userState, setUserState] = useState("");

  const checkUserState = () => {
    
    const urlLink = "http://localhost:5000/user/checkUserState";
    
    return new Promise((resolve, reject) => {
    
      axios({
    
        method: "POST",

        url: urlLink,

        data: {
          token: localStorage.getItem("userToken")
        }
      })
        .then(response => {
          // console.log(response);
          document.getElementById("userAvatar").innerHTML = response.data.userInfo.FIRSTNAME + " " + response.data.userInfo.LASTNAME;
    
          resolve("Active!");
    
        })
    
        .catch(error => {
    
          if (error.response.message === "Sorry, an error occurred!") {
    
            reject("Error!");
    
          } else {
    
            resolve("Token Expired!");
    
          }
    
        });
    
      });
  
    };


  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {

    (async () => {
    
      setIsFetching(true);
    
      const data = await  checkUserState();
    
      setUserState(data);
    
      setIsFetching(false);
    
    })();
  
  }, []);

  if (isFetching) {
  
    if(userState === "Token Expired!"){
  
      sessionStorage.setItem("userState","Ops, Your session has expired. Kindly sign in again!")
  
      window.location = "http://localhost:3000/auth/signin/"
  
    }
  
  }

  const sideBarNav = () => {
  
    if (sideBar === false) {
  
      document.getElementById("sideBar").style.display = "block";
  
      sidePos(true);
  
    } else {
  
      document.getElementById("sideBar").style.display = "none";
  
      sidePos(false);
  
    }
  
  }
  
  const sideBarBody = () => {
  
    if (sideBar === false) {
  
      document.getElementById("sideBar").style.display = "block";
  
      sidePos(true);
  
    } else {
  
      document.getElementById("sideBar").style.display = "none";
  
      sidePos(false);

    }
  
  }

  window.onscroll = () => {
  
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
  
            <span style={{ marginLeft: "0.5em" }} id="userAvatar"></span>
  
          </div>
  
        </header>
  
      </div>
  
    </div>
  
  );

}

export default AdminHeader;
