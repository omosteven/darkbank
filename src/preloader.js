import React from "react";

import "./preloader.css";

const Preloader = () => {
  function remove() {
    document.getElementById("pre").style.display = "none";
  }
  setTimeout(remove,3000);

  return (
    <div>
      <div className="pre fadeIn5" id="pre">
        <div>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://darkbank.io/img/security-logo.png"
              alt="DarkBank"
              className="darkBankWelcome darkbankAnimation"/>
          </div>
          <div className="darkbankLogo darkbankAnimation">DarkBank</div>
        </div>
        {/* <div id="pre" className="pre">
        <div >
          <div className="darkbankLogo darkbankAnimation">DarkBank</div>
        </div> */}
        {/* <div class="container-preloader">
          <i class="layer"></i>
          <i class="layer"></i>
          <i class="layer"></i>
        </div> */}
        {/* <div className="welcome">
          <div class="loading">
            <div class="loading__letter">W</div>
            <div class="loading__letter">E</div>
            <div class="loading__letter">L</div>
            <div class="loading__letter">C</div>
            <div class="loading__letter">O</div>
            <div class="loading__letter">M</div>
            <div class="loading__letter">E</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Preloader;
