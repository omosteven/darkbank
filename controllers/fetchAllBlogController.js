let BlogModel = require('../models/blogSchema');

const validator = require("validator");

// const ValidateInput = require("../util/Utility");

var FetchAllBlog = function FetchAllBlog(type, request, response) {

    BlogModel.find({}, (err, res) => {

        if (err) {
            response.status(400).send({
                type: type,
                route: "/blog/fetchAll",
                request: request,
                message: "Failed Fetching Blog Posts",
                data: err
            })
        } else {
            response.status(200).send({
                type: type,
                route: "/blog/fetchAll",
                request: request,
                message: "All Blog Posts Fetched",
                data: res,
                noOfResults: res.length

            })
        }
    });

}

module.exports.FetchAllBlog = FetchAllBlog;