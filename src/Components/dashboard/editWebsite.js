import React from "react";
import AdminDashboard from ".";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {
  Card,
  CardBody,
  Form,
  FormInput,
  Button,
  FormSelect
} from "shards-react";
import AdminFooter from "./admin-footer";
import { useState, useEffect } from "react";

const axios = require("axios");

function EditWebsite() {
  document.title = "DarkBank | Admin | EDIT THE WEBSITE CONTENT";

  const [sitePart, setSitePart] = useState("");

  const updateBtn = () => {
    document.getElementById("editFeedback").innerHTML = "";
    document.getElementById("editFeedback").style.color = "rgba(1,16,10,1)";

    if (
      sitePart.length > 2 &&
      document.getElementById("content").innerText !== "\n"
    ) {
      const urlLink = "http://localhost:5000/home/siteUpdate/";

      const updateObject = {
        SITEPART: sitePart,
        CONTENT: document.getElementById("content").innerText,
        ID : 1
      };

      axios({
        method: "POST",

        url: urlLink,

        data: updateObject
      })
        .then(function(response) {
          document.getElementById("editFeedback").innerHTML =
            "Great! You've just updated the website content.";
          document.getElementById("editFeedback").style.color =
            "rgba(1,16,10,1)";
            console.log(response);
        })

        .catch(function(err) {
          document.getElementById("editFeedback").innerHTML =
            err.response.data.message;
          document.getElementById("editFeedback").style.color = "red";
          console.log(err);
        });
    } else {
      document.getElementById("editFeedback").innerHTML =
        "Ops, seems all the fields are not well filled!";
      document.getElementById("editFeedback").style.color = "red";
    }
  };
  return (
    <div>
      {/* <AdminDashboard /> */}
      <div> . </div>
      <Card small className="addForm">
        <div className="form-title"> EDIT / UPDATE THE WEBSITE BELOW </div>
        <div style={{ marginLeft: "1.1em" }} id="editFeedback"></div>
        <CardBody>
          <Form className="add-new-post">
            <FormSelect
              size="lg"
              className="mb-3"
              placeholder="Select Edit Name"
              onChange={event => setSitePart(event.target.value)}
            >
              <option> Select Which Part to Edit </option>
              <option value="HOMEPAGECIRCLECONTENT">
                
                Homepage Circle Content
              </option>
              {/* For Our serices category */}
              <option value="OURSERVICESFIRSTCARDFRONTTITLE">
                
                Our Services - First Card - Front Title
              </option>
              <option value="OURSERVICESFIRSTCARDFRONTDESCRIPTION">
                
                Our Services - First Card - Front Description
              </option>
              <option value="OURSERVICESFIRSTCARDBACKCONTENT">
                
                Our Services - First Card - Back Content
              </option>
              <option value="OURSERVICESFIRSTCARDBACKCONTENT">
                
                Our Services - Second Card - Front Title
              </option>
              <option value="OURSERVICESSECONDCARDFRONTDESCRIPTION">
                
                Our Services - Second Card - Front Description
              </option>
              <option value="OURSERVICESSECONDCARDBACKCONTENT">
                
                Our Services - Second Card - Back Content
              </option>
              <option value="OURSERVICESTHIRDCARDFRONTTITLE">
                
                Our Services - Third Card - Front Title
              </option>
              <option value="OURSERVICESTHIRDCARDFRONTDESCRIPTION">
                
                Our Services - Third Card - Front Description
              </option>
              <option value="OURSERVICESTHIRDCARDBACKCONTENT">
                
                Our Services - Third Card - Back Content
              </option>
              {/* For contact us category */}
              <option value="CONTACTUSEMAIL"> Contact Us - Email </option>
              <option value="CONTACTUSTELEPHONE">
                
                Contact Us - Telephone
              </option>
              {/* For Footer Category */}
              <option value="FOOTERADDRESS"> Footer - Address </option>
              <option value="FOOTERFACEBOOKURL"> Footer - Facebook URL </option>
              <option value="FOOTERINSTAGRAMURL">
                
                Footer - Instagram URL
              </option>
              <option value="FOOTERGOOGLEPLUSURL">
                
                Footer - Google Plus URL
              </option>
              {/* For About Us */}
              <option value="ABOUTUSCONTENT">
                
                About Us - About Us Content
              </option>
            </FormSelect>
            <ReactQuill className="add-new-post__editor mb-1" id="content" />
          </Form>
        </CardBody>
        <div className="publish">
          <button className="publish-btn" onClick={updateBtn}>
            
            Update
          </button>
        </div>
      </Card>
      <AdminFooter />
    </div>
  );
}

export default EditWebsite;
