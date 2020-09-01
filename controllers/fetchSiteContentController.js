let siteModel = require("../models/siteSchema");

const FetchSiteContent = (type, request, response) => {

    siteModel.find({}, (err, res) => {
        if (err) {
            response.status(400).send({
                type: type,
                route: "/home/FetchSiteContent",
                request: request,
                message: "Failed Fetching Contents!",
                data: err
            })
        } else {
            response.status(200).send({
                type: type,
                route: "/home/FetchSiteContent",
                request: request,
                message: "Content Fetched!",
                data: res,
                noOfResults: res.length

            })
        }
    })
};

module.exports.FetchSiteContent = FetchSiteContent;