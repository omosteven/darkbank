var express = require("express"); //import the express js 

var bodyParser = require("body-parser") //import bodyParser

var mongoose = require("mongoose"); //import the mongodb schema library

var formidable = require("formidable");

var multer = require("multer"); //import the formData libary

// var formData = new multer();
var uploadBlogFile = multer({

    dest: "BlogFiles/"

});

var uploadJobFile = multer({

    dest: "JobFiles/"

});

// var uploadFile1 = multer({ dest: "JobFiles/" });

const app = express(); //initiate the express js

const DB = require("./util/database");

// Import the Controllers End Points

const Auth = require("./controllers/authController");

const FetchUsers = require("./controllers/fetchUsersController");

const PostBlog = require("./controllers/postBlogController");

const FetchAllBlog = require("./controllers/fetchAllBlogController");

const PostJob = require("./controllers/postJobController");

const FetchAllJobs = require("./controllers/fetchAllJobsController");

const SiteEdit = require("./controllers/siteEditController");

const FetchSiteContent = require("./controllers/fetchSiteContentController");

const checkUserState = require("./controllers/checkUserStateController");

const MongoClient = require("mongodb").MongoClient;

const DBServer = "mongodb://localhost:27017";

const cors = require("cors");


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

// app.use(formData.array());

app.use(express.static("public"));

app.use(cors());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
    );
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
})
app.get("/test/", (req, res) => {
    res.status(200).send({
        SEEN: "Yes"
    })
})
app.post("/auth/register/", (req, res, next) => {

    Auth.Auth("Create Account", req.body, res);

})

app.post("/auth/signin/", (req, res) => {

    Auth.Auth("Sign Into Your Account", req.body, res);

})

app.post("/auth/signin/", (req, res) => {

    Auth.Auth("Sign Into Your Account", req.body, res);

})

app.post("/user/fetchUsers/", (req, res) => {

    FetchUsers.FetchUsers("FetchUsers", req.body, res);

})


app.post("/blog/newpost", uploadBlogFile.single("BLOGIMAGE"), (req, res) => {

    PostBlog.PostBlog("Blognewpost", req, res);

})


app.post("/blog/fetchAll", (req, res) => {

    FetchAllBlog.FetchAllBlog("Fetch All Blog", req.body, res);

})



app.post("/job/newpost", uploadJobFile.single("JOBIMAGE"), (req, res) => {

    PostJob.PostJob("Post New Job", req.body, req.file, res);

});

app.post("/job/fetchAll", (req, res) => {

    FetchAllJobs.FetchAllJobs("Fetch All Jobs", req.body, res);

})

app.post("/home/siteUpdate/", (req, res) => {

    SiteEdit.SiteEdit("Update Site", req.body, res);

})

app.get("/home/FetchSiteContent/", (req, res) => {

    FetchSiteContent.FetchSiteContent("Fetch Site Content", req.body, res);

})

app.post("/user/checkUserState", (req, res) => {

    checkUserState.checkUserState("checkUserState", req.body, res);

})


app.use("*", (req, res) => {

    res.status(200).send({
        type: "default",
        route: "/",
        message: "Hi there! Welcome to DarkBank API.",
        data: {
            database: "mongoDB",
            architecture: "mongoose"
        }
    })
});


var server = app.listen(5000, () => {
    host = server.address().address;
    port = server.address.port;
    console.log('Server running at ' + "5000");
})