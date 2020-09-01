import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import AdminDashboard from ".";
import "./CSS/addBlog.css";
import AdminFooter from "./admin-footer";
import { Card, CardBody, CardImg, Form, FormInput } from "shards-react";
import { useState, useEffect } from "react";
const axios = require("axios").default;

// const jwt = require("jsonwebtoken");


const AddBlogPost = () => {
  
  document.title = "DarkBank | Admin | POST A NEW BLOG";

  const [BlogImage, setBlogImage] = useState("");

  const [BlogTitle, setBlogTitle] = useState("");

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
      sessionStorage.setItem("userState","Expired!")
     window.location = "http://localhost:3000/auth/signin/"
    }
  }

  const displayImage = event => {
    var reader = new FileReader();

    reader.onload = function() {
      var output = document.getElementById("imagePreview");

      output.src = reader.result;
    };

    reader.readAsDataURL(event.target.files[0]);

    setBlogImage(event.target.value);
  };

  const createBlogPost = () => {
    document.getElementById("postFeedback").innerHTML = "";

    const urlLink = "http://localhost:5000/blog/newpost";

    const dataObject = new FormData();

    dataObject.append("POSTEDBY", localStorage.getItem("userToken"));

    dataObject.append("BLOGTITLE", BlogTitle);

    dataObject.append(
      "BLOGPOST",
      document.getElementById("BlogPost").innerText
    );

    dataObject.append(
      "BLOGIMAGE",
      document.getElementById("blogFile").files[0]
    );

    if (
      BlogTitle.length > 2 &&
      BlogImage !== "" &&
      document.getElementById("BlogPost").innerText !== "\n"
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
  };

  return (
    <div>
      <AdminDashboard />
      <div>.</div>
      <Card small className="addForm jobForm">
        <div className="form-title">ADD A NEW BLOG POST</div>

        <div style={{ marginLeft: "1.1em" }} id="postFeedback"></div>
        <CardBody>
          <Form className="add-new-post">
            <FormInput
              size="lg"
              className="mb-3"
              placeholder="Your Post Title"
              id="blogTitle"
              onChange={event => setBlogTitle(event.target.value)}
            />
            <p className="jobImgInd">
              UPLOAD AND PREVIEW BLOG POST IMAGE HERE!
            </p>

            <CardImg id="imagePreview" className="JobImage" />

            <input
              type="file"
              size="lg"
              className="selectImage"
              placeholder="Job Title"
              onChange={displayImage}
              id="blogFile"
            />
            <ReactQuill
              className="add-new-post__editor mb-1 jobDescription"
              id="BlogPost"
            />
          </Form>
        </CardBody>
        <div className="publish">
          <button className="publish-btn" onClick={createBlogPost}>
            Publish
          </button>
        </div>
      </Card>

      {/* <div style={{textAlign:"center"}}>Test</div> */}
      <AdminFooter />
    </div>
  );
};

export default AddBlogPost;
