import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {
  Card,
  CardBody,
  CardImg,
  Form,
  FormInput
} from "shards-react";
import AdminDashboard from ".";
import "./CSS/addJob.css";

import AdminFooter from "./admin-footer";
import RangeSalary from "./rangeSalary";

// The page is built on Shards React Library

import { useState, useEffect } from "react";
const axios = require("axios").default;



const AddJob = () => {
  
  const [JobImage, setJobImage] = useState("");

  const [JobTitle, setJobTitle] = useState("");

  const [JobSalary, setJobSalary] = useState("");

  const [JobValidity, setJobValidity] = useState("");


  const displayImage = (event) => {
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById("imagePreview");
      output.src = reader.result;
    };
    
    reader.readAsDataURL(event.target.files[0]);
    
    setJobImage(event.target.value);
  }

  const publishJob = (e) =>{
    e.preventDefault();

    document.getElementById("postFeedback").innerHTML = "";

    const urlLink = "http://localhost:5000/job/newpost";

    const dataObject = new FormData();

    dataObject.append("POSTEDBY", localStorage.getItem("userToken"));

    dataObject.append("JOBTITLE", JobTitle);

    dataObject.append(
      "JOBROLES",
      document.getElementById("jobDesc").innerText
    );

    dataObject.append(
      "JOBIMAGE",
      document.getElementById("jobFile").files[0]
    );

    // dataObject.append("JOBSALARYSTARTRANGE",)

    console.log(JobSalary)

    if (
      JobTitle.length > 2 &&
      JobImage !== "" &&
      document.getElementById("jobDesc").innerText !== "\n"
    ) {
      axios({
        method: "POST",

        url: urlLink,

        data: dataObject
      })
        .then(function(response) {
          document.getElementById("postFeedback").innerHTML =
            "Great! You've just added a new blog post.";
          document.getElementById("postFeedback").style.color =
            "rgba(1,16,10,1)";
        })

        .catch(function(err) {
          if (err.response.data.message === "Invalid Email") {
            document.getElementById("postFeedback").innerHTML =
              "Sorry, you're not authorized for this!";
          } else {
            document.getElementById("postFeedback").innerHTML =
              err.response.data.message;
          }
          document.getElementById("postFeedback").style.color = "red";
        });
    } else {
      document.getElementById("postFeedback").innerHTML =
        "Ops, seems all the fields are not well filled!";
      document.getElementById("postFeedback").style.color = "red";
    }


  }
  document.title = "DarkBank | Admin | POST A NEW JOB";
  return (
    <div>
      <AdminDashboard />
      <div>.</div>
      <Card small className="addForm jobForm">
        <div className="form-title">POST A NEW JOB</div>
        <div style={{ marginLeft: "1.1em" }} id="postFeedback"></div>
        <CardBody>
          <Form className="add-new-post">
            <FormInput size="lg" className="job-col1" placeholder="Job Title" onChange={event => setJobTitle(event.target.value)} />
            {/* <div>Validity</div> */}
            <FormInput
              size="lg"
              className="job-col1 job" 
              type="date" onChange={event => setJobValidity(event.target.value)}
            />

            {/* Import the File handling the Salary Range */}
            <RangeSalary onChange={event => setJobSalary(event.target.value)}/>
         
            <p className="jobImgInd">UPLOAD AND PREVIEW JOB IMAGE HERE!</p>

            <CardImg id="imagePreview" className="JobImage" />

            <input
              type="file"
              size="lg"
              className="selectImage"
              placeholder="Job Title"
              onChange={displayImage} id="jobFile"
            />

            <ReactQuill
              className="add-new-post__editor mb-1 jobDescription"
              placeholder="Description of the Job here" id="jobDesc"
            />
          </Form>
        </CardBody>
        <div className="publishJob">
          <button className="publish-btn" onClick={publishJob}>Publish</button>
        </div>
      </Card>

      {/* <div style={{textAlign:"center"}}>Test</div> */}
      <AdminFooter />
    </div>
  );
}

export default AddJob;
