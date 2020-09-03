import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./CSS/auth.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

const axios = require("axios").default;

const Register = () => {

  document.title = "DarkBank | User | CREATE A NEW ACCOUNT";

  const registerBtn = e => {

    e.preventDefault();

    document.getElementById("registerForm").disabled = "true";

    document.getElementById("registerID").innerHTML = "Please wait!";

    document.getElementById("ApiResponse").innerHTML = "";

    const urlLink = "http://localhost:5000/auth/register/";

    if (document.getElementById("password").value.length > 7) {

      if (
        document.getElementById("password").value ===
        document.getElementById("password2").value
      ) {

        const dataObject = {

          FIRSTNAME: document.getElementById("firstName").value,

          LASTNAME: document.getElementById("lastName").value,

          EMAIL: document.getElementById("email").value,

          PASSWORD: document.getElementById("password").value

        };

        axios({

          method: "POST",

          url: urlLink,

          data: dataObject

        })

        .then(function(response) {

          document.getElementById("registerID").innerHTML = "REGISTER";

          document.getElementById("ApiResponse").style.color = "rgba(1,16,10,1)";

          document.getElementById("ApiResponse").innerHTML =
              "Your account has been successfully created! Kindly check your email to confirm.";

            })

          .catch(function(err) {

            document.getElementById("registerID").innerHTML = "REGISTER";

            document.getElementById("ApiResponse").style.color = "red";

            if (err.response.data.message === "Invalid Payload") {

              document.getElementById("ApiResponse").innerHTML =
                "We're sorry, an error occurred. Kindly try again";

              } else {

                document.getElementById("ApiResponse").innerHTML =

                err.response.data.message;
            }

          });

        } else {

          document.getElementById("ApiResponse").innerHTML =
          "The two passwords didn't match!";

          document.getElementById("registerID").innerHTML = "REGISTER";

        }

      } else {

        document.getElementById("ApiResponse").innerHTML =
        "The entered password is too short!";

        document.getElementById("registerID").innerHTML = "REGISTER";

      }

    };

  return (

    <div className="Authwrapper">
    
      <div className="Authwrapper fadeInAuthDown">
    
        <div id="AuthformContent">
    
          <div className="fadeInAuth first">CREATE ACCOUNT</div>
    
          <div className="ApiResponse" id="ApiResponse"></div>
    
          <form id="registerForm">
    
            <input
              type="text"
              className="loginInput fadeInAuth second"
              id="firstName"
              placeholder="Firstname"
            />
    
            <input
              type="text"
              className="loginInput fadeInAuth second"
              id="lastName"
              placeholder="Lastname"
            />
    
            <input
              type="text"
              className="loginInput fadeInAuth second"
              id="email"
              placeholder="Email"
            />
    
            <input
              type="password"
              className="loginInput fadeInAuth third"
              id="password"
              placeholder="Password"
            />
    
            <input
              type="password"
              className="loginInput fadeInAuth third"
              id="password2"
              placeholder="Confirm password"
            />
    
            <button
              variant="contained"
              color="primary"
              className="btn-auth fadeInAuth fourth"
              id="registerID"
              onClick={registerBtn}
            >
              REGISTER
            </button>
    
            <div className="orBox">
    
              <Link to="/auth/signin/" className="signInLink">
                Already own an account?
              </Link>

              {/* <hr className="hrAuth" />
              OR
              <hr className="hrAuth" />
              <button
                variant="contained"
                color="primary"
                className="btn-auth fadeInAuth fourth orBtn"
              >
                SIGNIN
              </button> */}

            </div>

          </form>

        </div>

      </div>

    </div>

);

};

export default Register;