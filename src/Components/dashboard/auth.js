import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./CSS/auth.css";

const Auth = () => {
 
  document.title = "DarkBank | Admin | LOGIN TO DASHBOARD";

  return (
    <div>
      <div className="wrapper fadeInAuthDown">
        <div id="formContent">
          <div className="fadeInAuth first">ADMIN LOGIN</div>

          <form>
            <input
              type="text"
              className="loginInput fadeInAuth second"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="loginInput fadeInAuth third"
              name="password"
              placeholder="Password"
            />
            <button
              variant="contained"
              color="primary"
              className="btn-auth fadeInAuth fourth"
            >
              SIGNIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Auth;
