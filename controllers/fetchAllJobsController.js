let DeveloperModel = require('../models/developerSchema');

const validator = require("validator");

// const ValidateInput = require("../util/Utility");

var FetchAllJobs = function FetchAllJobs(type, request, response) {

    DeveloperModel.find({}, (err, res) => {

        if (err) {
            response.status(400).send({
                type: type,
                route: "/job/fetchAll",
                request: request,
                message: "Failed Fetching Job Posts",
                data: err
            })
        } else {
            response.status(200).send({
                type: type,
                route: "/job/fetchAll",
                request: request,
                message: "All Job Posts Fetched",
                data: res,
                noOfResults: res.length

            })
        }
    });

}

module.exports.FetchAllJobs = FetchAllJobs;