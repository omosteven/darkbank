import React from "react";
import Head from "../header";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/developer.css";
import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "../preloader";

import { useState, useEffect } from "react";

const axios = require("axios").default;

const JobFetch = () => {
  const urlLink = "http://localhost:5000/job/fetchAll";

  const dataObject = {};

  return new Promise((resolve, reject) => {
    axios({
      method: "POST",

      url: urlLink,

      data: dataObject
    })
      .then(function(response) {
        resolve(response.data.data);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

const Developer = () => {
  const [isFetchingJob, setIsFetchingJob] = useState(false);

  const [dataFetchedJob, setDataFetchedJob] = useState([]);

  useEffect(() => {
    (async () => {
      setIsFetchingJob(true);
      const data = await JobFetch();
      setDataFetchedJob(data);
      setIsFetchingJob(false);
    })();
  }, []);

  if (isFetchingJob) return <p>Is fetching</p>;


  AOS.init();

  document.title = "Darkbank | Jobs & Developers";
console.log(dataFetchedJob)
  return (
    <div>
      <Preloader />
      <Head />
      <div>
        <div className="developer-banner fadeIn">
          <div>
            <hr style={{ marginTop: "0em" }} />
            <div className="darkbank-logo">
              <img
                src="https://darkbank.io/img/security-logo.png"
                alt="DarkBank"
                className="darkbank"
              />
            </div>

            <div className="blogus">WE ARE HIRING</div>
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
              <span>WE ARE HIRING</span>
            </div>
          </div>
        </div>

        {dataFetchedJob.map(Jobs => (
          <div
            className="developer-class"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <div className="job-image">
              <div>
                <img
                  src="https://res.cloudinary.com/dzflzvx3h/image/upload/v1597163499/darkbank/developer/clement-h-95YRwf6CNw8-unsplash_bpj7ri.jpg"
                  alt="job"
                  className="job-view"
                />
              </div>
              <div className="job-title">
                <i className="fa fa-tasks icon-blog"></i> {Jobs.JOBTITLE}
              </div>
              <div className="job-desc">
                <span>
                  <i className="fa fa-money icon-blog"></i> {Jobs.JOBSALARYSTARTRANGE + " - " + Jobs.JOBSALARYENDRANGE}
                </span>
                <span style={{ float: "right", marginRight: "5%" }}>
                  <i className="fa fa-clock-o icon-blog"></i> 2 mins ago
                </span>
              </div>
            </div>
            <div className="job-details">
              <div className="role">Role</div>
              <div className="job-info">
                {Jobs.JOBROLES}
                {/* <li>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum
                </li>
                <li>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum
                </li>
                <li>
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum
                </li> */}
                {/* <li>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </li>
              <li>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </li>
              <li>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </li>
              <li>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </li>
              <li>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </li> */}
              </div>
              <div className="apply-box">
                <button className="apply">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Developer;
