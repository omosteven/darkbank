import React from "react";

import "react-quill/dist/quill.snow.css";

import ReactQuill from "react-quill";

import { Card, CardBody, CardImg, Form, FormInput } from "shards-react";

import AdminDashboard from ".";

import "./CSS/addJob.css";

import AdminFooter from "./admin-footer";

// import RangeSalary from "./rangeSalary";

// The page is built on Shards React Library

import { useState } from "react";

import { Slider } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const axios = require("axios").default;

const AddJob = () => {

    
    const [JobImage, setJobImage] = useState("");

    const [JobTitle, setJobTitle] = useState("");

    const [JobSalary, setJobSalary] = useState({ value: [250, 5000] });
    
    
    
    const handleSlide = (e) => {
   
       setJobSalary({
         value: [parseInt(e[0]), parseInt(e[1])]
       });
     }

    const [JobValidity, setJobValidity] = useState("");

    const displayImage = event => {
        
        var reader = new FileReader();
    
        reader.onload = () => {
    
            var output = document.getElementById("imagePreview");
      
            output.src = reader.result;
    
        };

        reader.readAsDataURL(event.target.files[0]);

        setJobImage(event.target.value);

    };

       


    const publishJob = e => {

        e.preventDefault();

        // document.getElementById("formContainer"). = reset;

        document.getElementById("postFeedback").innerHTML = "";

        const urlLink = "http://localhost:5000/job/newpost";

        const dataObject = new FormData();

        dataObject.append("POSTEDBY", localStorage.getItem("userToken"));

        dataObject.append("JOBTITLE", JobTitle);

        dataObject.append("JOBROLES", document.getElementById("jobDesc").innerText);

        dataObject.append("JOBIMAGE", document.getElementById("jobFile").files[0]);

        dataObject.append("JOBSALARYSTARTRANGE", Object.values(JobSalary.value)[0]);

        dataObject.append("JOBSALARYENDRANGE", Object.values(JobSalary.value)[1]);

        dataObject.append("JOBVALIDITY", JobValidity);

        // const testObject = {
        //   POSTEDBY  : localStorage.getItem("userToken"),
        //   JOBTITLE : JobTitle,
        //   JOBROLES : document.getElementById("jobDesc").innerText,
        //   JOBIMAGE : JobImage,
        //   JOBSALARYSTARTRANGE : Object.values(JobSalary.value)[0],
        //   JOBSALARYENDRANGE : Object.values(JobSalary.value)[1],
        //   JOBVALIDITY : JobValidity
        // }

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
    
                    document.getElementById("postFeedback").innerHTML = "Great! You've just added a new blog post.";
                    document.getElementById("postFeedback").style.color ="rgba(1,16,10,1)";
        
                })

        
                .catch(function(err) {
        
                    if (err.response.data.message === "Invalid Email") {
        
                        document.getElementById("postFeedback").innerHTML ="Sorry, you're not authorized for this!";
        
                    } else {
        
                        document.getElementById("postFeedback").innerHTML =
        
                        err.response.data.message;
        
                    }
        
                    document.getElementById("postFeedback").style.color = "red";
        
                });
    
            } else {
    
                document.getElementById("postFeedback").innerHTML = "Ops, seems all the fields are not well filled!";
      
                document.getElementById("postFeedback").style.color = "red";
    
            }
  
        };
  
        document.title = "DarkBank | Admin | POST A NEW JOB";
  
    return (
    
    <div>
      <AdminDashboard />
      <div> . </div>
      <Card small className="addForm jobForm">
    
        <div className="form-title"> POST A NEW JOB </div>
    
        <div style={{ marginLeft: "1.1em" }} id="postFeedback">
          
        </div>
    
        <CardBody>
    
          <Form className="add-new-post" id="formContainer">
    
            <FormInput
              size="lg"
              className="job-col1"
              placeholder="Job Title"
              onChange={event => setJobTitle(event.target.value)}
            />
            {/* <div>Validity</div> */}
    
            <FormInput
              size="lg"
              className="job-col1 job"
              type="date"
              onChange={event => setJobValidity(event.target.value)}
            />
  
            <p> JOB SALARY IN DOLLARS: {JSON.stringify(JobSalary.value)} </p>
        
            <Slider
              connect
              onSlide={handleSlide} className="slider"
              start={JobSalary.value}
              range={{ min: 0, max: 10000 }}
            />

            <p className="jobImgInd"> UPLOAD AND PREVIEW JOB IMAGE HERE! </p>
    
            <CardImg id="imagePreview" className="JobImage" />
    
            <input
              type="file"
              size="lg"
              className="selectImage"
              placeholder="Job Title"
              onChange={displayImage}
              id="jobFile"
            />
    
            <ReactQuill
              className="add-new-post__editor mb-1 jobDescription"
              placeholder="Description of the Job here"
              id="jobDesc"
            />
    
          </Form>
    
        </CardBody>
    
        <div className="publishJob">
    
          <button className="publish-btn" onClick={publishJob}>
            
            Publish
          </button>
    
        </div>
    
      </Card>
     
     <AdminFooter />
    
    </div>
  
  );

};

export default AddJob;
