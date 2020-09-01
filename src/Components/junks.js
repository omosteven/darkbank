import React from "react";
import Head from "../header";
import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/body.css";
import Preloader from "../preloader";
// import "../Components/animation/assets-landing/css/bootstrap.min.css";
import "../Components/animation/assets-landing/css/style.css";
// import "./Components/animation/assets-landing/css/icons.css";
import { Helmet } from "react-helmet";

function Home() {
    AOS.init();

    document.title =
        "DarkBank - The First African Security and Connectivity Company";

    return ( <
            div > { /* data-aos="zoom-out" */ } { /* <Preloader /> */ } <
            Head / >
            <
            Helmet >
            <
            link rel = "stylesheet"
            href = "../securelitechain/demo/assets/css/style.css" /
            >
            <
            link rel = "stylesheet"
            href = "../securelitechain/demo/assets/css/responsive.css" /
            >
            <
            link rel = "stylesheet"
            href = "../securelitechain/demo/assets/css/animate.css" /
            >
            { /* <!-- Latest Bootstrap min CSS --> */ } <
            link rel = "stylesheet"
            href = "../securelitechain/demo/assets/bootstrap/css/bootstrap.min.css" /
            >
            { /* <!-- Google Font --> */ } <
            link href = "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
            rel = "stylesheet" /
            >
            { /* <!-- Font Awesome CSS --> */ } <
            link rel = "stylesheet"
            href = "../securelitechain/demo/assets/css/ionicons.min.css" /
            >
            <
            /Helmet>

            <
            div >
            <
            div className = "banner fadeIn" >
            <
            div >
            <
            hr style = {
                { marginTop: "0em" }
            }
            />

            {
                /* <div className="left-home">
                              <div className="home-title">Explore and Secure</div>
                              <div className="home-title2">Connectivity</div>

                              <div className="home">Lorem isum dhfhfhhhhhhhhhhhhhh</div>

                              <div className="home-btn-class">
                                <button className="home-btn">Get Started</button>
                              </div>
                            </div>
                            <div className="right-home">
                              <img src={FirstImage} alt="Logo Here" className="firstImage" />
                            </div>
                          </div> <div id="particles-js">
                        </div> */
            } { /* <div id="particles-js"></div> */ } <
            div id = "particles-js"
            style = {
                { color: "red" }
            } > < /div> <
            div className = "darkbank-logo" > {
                /* <img
                                src="https://darkbank.io/img/security-logo.png"
                                alt="DarkBank"
                                className="darkbank"
                              /> */
            } <
            /div>

            <
            div className = "homebody explored" >
            Explore and Secure Connectivity <
            /div> {
            /* <div className="home-blogus">
                          <span style={{ fontSize: "1.2em" }}>
                            Home of secure connection
                          </span>
                        </div> */
        } < div className = "home-btn-class button-group slider-animation-up" > {
            /* <button className="btn home-btn">
                            Get Started
                          </button> */
        } <
        a className = "btn btn-normal home-btn"
    style = {
            { borderRadius: "2em", height: "2.5em" }
        } >
        Get Started <
        /a> < /
        div > <
        /div> < /
        div >


        <
        section id = "home"
    className = "banner_section section_gradiant_dark"
    style = {
            {
                backgroundImage: "linear-gradient(-90deg,rgb(0,0,30), rgb(0,0,30))"
            }
        } >
        <
        div id = "banner_bg_effect"
    className = "banner_effect" > < /div> <
    div className = "container" >
        <
        div className = "slider-title" >

        <
        /div> < /
        div > <
        div style = {
            {
                backgroundImage: "url('../securelitechain/demo/assets/images/banner_wave.png')"
            }
        }
    className = "section_wave" >
        <
        /div> < /
        section >

        <
        div className = "ourservices"
    data - aos = "fade-out"
    aos - duration = "500" >
        <
        div className = "services" > OUR SERVICES < /div> <
    div className = "serv" > We lorem ipsum lorem ipsum always < /div>

    <
    div className = "container blog-cover" >
        <
        div className = "row mt-3" >
        <
        div className = "col-sm-12 col-lg-6 col-xl-4 col-md-6 blog-inner"
    data - aos = "fade-out"
    aos - duration = "1000" >
        <
        div className = "cards" >
        <
        div className = "col-sm-12 col-lg-12 col-xl-12 col-md-12 flip-card" >
        <
        div className = "image flip-card-inner" >
        <
        div className = "flip-card-front" >
        . <
        div className = "icon1" >
        <
        i className = "fa fa-lock" > < /i> < /
        div > <
        div className = "item1" > Improving Security < /div> <
    div className = "item2" >
        We help in penetration testing <
        /div> < /
        div >

        <
        div className = "flip-card-back1" >
        . <
        div className = "icon1" >
        <
        i className = "fa fa-lock" > < /i> < /
        div > <
        div className = "item1" > Content Team 1 < /div> <
    div className = "item2" > We will edit this later < /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >

        <
        div className = "col-sm-12 col-lg-6 col-xl-4 col-md-6 blog-inner"
    data - aos = "fade-out"
    aos - duration = "1000" >
        <
        div className = "cards" >
        <
        div className = "col-sm-12 col-lg-12 col-xl-12 col-md-12 flip-card" >
        <
        div className = "image2 flip-card-inner" >
        <
        div className = "flip-card-front" >
        . <
        div className = "icon1" >
        <
        i className = "fa fa-shield" > < /i> < /
        div > <
        div className = "item1" > Privatization < /div> <
    div className = "item2" >
        We help tu further decentralize you <
        /div> < /
        div >

        <
        div className = "flip-card-back1" >
        . <
        div className = "icon1" >
        <
        i className = "fa fa-shield" > < /i> < /
        div > <
        div className = "item1" > Content Team 2 < /div> <
    div className = "item2" > We will edit this later < /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >

        <
        div className = "col-sm-12 col-lg-6 col-xl-4 col-md-6 blog-inner"
    data - aos = "fade-out"
    aos - duration = "1000" >
        <
        div className = "cards" >
        <
        div className = "col-sm-12 col-lg-12 col-xl-12 col-md-12 flip-card" >
        <
        div className = "image3 flip-card-inner" >
        <
        div className = "flip-card-front" >
        . <
        div className = "icon1" >
        <
        i className = "fa fa-mobile" > < /i> < /
        div > <
        div className = "item1" > Mobile Trading < /div> <
    div className = "item2" >
        We help to further your financial mobile trading <
        /div> < /
        div >

        <
        div className = "flip-card-back" >
        . <
        div className = "icon1" >
        <
        i className = "fa fa-mobile" > < /i> < /
        div > <
        div className = "item1" > Mobile Trading2 < /div> <
    div className = "item2" >
        We help to further your financial mobile trading <
        /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /div>

    <
    div className = "ourservices"
    data - aos = "fade-out"
    aos - duration = "1000" >
        <
        div className = "services" > GET IN TOUCH < /div> <
    div className = "contact-container" >
        <
        div className = "image-card" >
        <
        div > . < /div> <
    div className = "contactUs" > CONTACT US < /div> <
    div className = "reachout" > You can reach us via < /div> <
    div className = "reachout-addr" >
        <
        i className = "fa fa-envelope" > < /i> admin@darkbank.io < /
        div > <
        /div> <
    div className = "contact-card" >
        <
        div className = "hide" > . < /div> <
    div className = "displayText"
    style = {
            { fontWeight: "500", marginTop: "-1em" }
        } >
        Do you wish to reach out to us ?
        <
        /div>

    <
    div className = "contact-box" >
        <
        div className = "box-title" > Full name < /div> <
    div >
        <
        input type = "text"
    className = "contact-input" / >
        <
        /div>

    <
    div className = "box-title" > Email which we can reach out to < /div> <
    div >
        <
        input type = "text"
    className = "contact-input" / >
        <
        /div>

    <
    div className = "box-title" > Subject of Message < /div> <
    div >
        <
        input type = "text"
    className = "contact-input" / >
        <
        /div>

    <
    div className = "box-title" > Message To Send < /div> <
    div >
        <
        input type = "text"
    className = "contact-input" / >
        <
        /div> < /
        div > <
        div >
        <
        button className = "contact-btn" > Send < /button> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >

        <
        Footer / >

        <
        Helmet > { /* <script src="../js/jquery.min.js"></script> */ }

    { /* <script src="../js/jquery.easypiechart.min.js"></script> */ }

    {
        /* <script src="../js/particles.min.js"></script>

                <script src="../js/app.js"></script> */
    }

    <
    script src = "../securelitechain/demo/assets/js/jquery-1.12.4.min.js" > < /script>

    <
    script src = "../securelitechain/demo/assets/bootstrap/js/bootstrap.min.js" > < /script>

    <
    script src = "../securelitechain/demo/assets/owlcarousel/js/owl.carousel.min.js" > < /script> { / * <!-- magnific-popup min js  --> */ } <
        script src = "../securelitechain/demo/assets/js/magnific-popup.min.js" > < /script> { / * <!-- waypoints min js  --> */ } <
        script src = "../securelitechain/demo/assets/js/waypoints.min.js" > < /script> { / * <!-- parallax js  --> */ } <
        script src = "../securelitechain/demo/assets/js/parallax.js" > < /script> { / * <!-- countdown js  --> */ } <
        script src = "../securelitechain/demo/assets/js/jquery.countdown.min.js" > < /script> { / * <!-- particles min js  --> */ } <
        script src = "../securelitechain/demo/assets/js/particles.min.js" > < /script> { / * <!-- chart js  --> */ } <
        script src = "../securelitechain/demo/assets/js/chart.bundle.js" > < /script> <
    script src = "../securelitechain/demo/assets/js/chart.piecelabel.min.js" > < /script> <
    script src = "../securelitechain/demo/assets/js/chart_script.js" > < /script> { / * <!-- scripts js --> */ } <
        script src = "../securelitechain/demo/assets/js/scripts.js" > < /script>

    { /* <script src="../js/custom.js"></script> */ } <
    /Helmet> < /
    div >
);
}

export default Home;