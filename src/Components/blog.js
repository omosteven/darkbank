import React, { useState, useEffect } from "react";

import Head from "../header";

import { BrowserRouter as Router, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./CSS/blog.css";

import Footer from "../footer";

import AOS from "aos";

import "aos/dist/aos.css";

import Preloader from "../preloader";

const axios = require("axios").default;

const BlogFetch = () => {

  const urlLink = "http://localhost:5000/blog/fetchAll";

  const dataObject = {};

  return new Promise((resolve, reject) => {

    axios({

      method: "POST",

      url: urlLink,

      data: dataObject

    })

    .then(function(response) {

      resolve(response.data.data);

      // return response.data.data;
      })

      .catch(function(err) {
        // console.log("error");
        reject(err);

      });

    });

  };


  const Blog = () => {

    const [isFetching, setIsFetching] = useState(false);


    const [dataFetched, setDataFetched] = useState([]);


    useEffect(() => {

      (async () => {

        setIsFetching(true);

        const data = await BlogFetch();

        setDataFetched(data);

        setIsFetching(false);

      })();

    }, []);


    if (isFetching) return <p>Is fetching</p>;


    AOS.init();

    document.title = "Darkbank | Blog";

    // console.log(dataFetched)


  return (

    <div>
      
      <Preloader />
      
      <Head />

      <div>

        <div className="about-container">

          <div className="blog-banner fadeIn">

            <div>

              <hr style={{ marginTop: "0em" }} />

              <div className="darkbank-logo">

                <img
                  src="https://darkbank.io/img/security-logo.png"
                  alt="DarkBank"
                  className="darkbank"
                />

              </div>

              <div className="blogus">BLOG</div>

              <div className="home-blogus">

                <span>HOME</span>

                <i
                  className="fa fa-angle-right"
                  style={{
                    marginLeft: "0.3em",
                    marginRight: "0.3em",
                    fontSize: "1.3em"
                  }}
                ></i>

                <span>BLOG</span>

              </div>

            </div>

          </div>

          <div
            className="container blog-cover"
            data-aos="flip-down-right"
            aos-duration="1500"
          >

            <div className="row mt-3">
              {dataFetched.map(B => (
                <div
                  className="col-sm-12 col-lg-6 col-xl-4 col-md-6 blog-inner"
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >

                  <div className="card">

                    <div className="col-sm-14 col-lg-14 col-xl-14 col-md-14">

                      <div className="images">

                        <img
                          src="https://res.cloudinary.com/dzflzvx3h/image/upload/v1597163421/darkbank/blog/blogging-336376_1920_nqzfq8.jpg"
                          className="blog"
                          alt=""
                        />

                      </div>

                    </div>

                    <div className="col-sm-12 col-lg-12 col-xl-12 col-md-12">

                      <div className="card-inner">

                        <div className="header">

                          <h5 className="blog-title">{B.BLOGTITLE}</h5>

                          <span className="blog-date">

                            <i className="fa fa-calendar icon-blog"></i>
                            {" " + B.created_at.substring(0, 10) + " "}
                            <i className="fa fa-clock-o icon-blog"></i>
                            {" "+ B.created_at.substring(11, 19)}

                          </span>

                          <span className="blog-poster">

                            <i className="fa fa-user icon-blog"></i> BY ADMIN

                          </span>

                        </div>

                        <div className="blog-content">
                          <p>{B.BLOGPOST}</p>
                        </div>

                        <div className="readMore">

                          <Link to={B.BLOGPOST} className="read">
                            READ MORE
                          </Link>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))}
            
            </div>
          
          </div>
        
        </div>
      
      </div>
      
      <Footer />
    
    </div>
  
  );

};

export default Blog;
