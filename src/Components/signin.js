import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./CSS/auth.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const axios = require("axios").default;

const SignIn = () => {
  document.title = "DarkBank | User | LOGIN TO DASHBOARD";

  const [UserEmail, setUserEmail] = useState("");

  const [UserPassword, setUserPassword] = useState("");

  const [userState,setUserState] = useState("");

  const signInBtn = e => {
    e.preventDefault();
    document.getElementById("LoginID").innerHTML = "PLEASE WAIT!";
    const userSignInObject = {
      EMAIL: UserEmail,
      PASSWORD: UserPassword
    };
    if (UserEmail.length > 0 && UserPassword.length > 0) {

      const urlSignInLink = "http://localhost:5000/auth/signin/";

      axios({
        method: "POST",

        url: urlSignInLink,

        data: userSignInObject
      })
        .then(function(response) {

          document.getElementById("loginFeedback").innerHTML =
            "Successful";
            console.log(response.data.token);
            localStorage.setItem('userToken', response.data.token);

        })

        .catch(function(err) {
          document.getElementById("loginFeedback").innerHTML = err.response.data.message;
        });
    } else {
      document.getElementById("loginFeedback").innerHTML =
        "Ops! You can't signin with incomplete details";
    }
    
    document.getElementById("LoginID").innerHTML = "SIGNIN";
  };

  const LoadFeedback = () => {

    document.getElementById("loginFeedback").innerHTML = "hhh"
    
  }
  // if(sessionStorage.getItem("userState") !== null){

  //   document.getElementById("loginFeedback").innerHTML = "hhh"
  // }
  console.log(sessionStorage.getItem("userState"));
  return (
    <div className="Authwrapper">
      <div className="Authwrapper fadeInAuthDown align-items-center">
        <div id="AuthformContent1" className="col-6 align-items-center">
          <div className="fadeInAuth first">SIGNIN TO YOUR ACCOUNT</div>
          <div className="ApiResponse" id="loginFeedback" onLoad = {event => event.target.innerHTML = "d"}></div>

          <form>
            <input
              type="text"
              className="loginInput fadeInAuth second"
              name="email"
              placeholder="Email"
              onChange={event => setUserEmail(event.target.value)}
            />
            <input
              type="password"
              className="loginInput fadeInAuth third"
              name="password"
              placeholder="Password"
              onChange={event => setUserPassword(event.target.value)}
            />

            <button
              variant="contained"
              color="primary"
              className="btn-auth fadeInAuth fourth"
              onClick={signInBtn}
              id="LoginID"
            >
              SIGNIN
            </button>
            <div className="orBox">
              <Link to="/auth/register/" className="signInLink">
                Don't own an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
