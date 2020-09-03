let FetchModel = require('../models/authSchema');

const FetchUsers = (type, request, response) => {

    FetchModel.find({}, (err, res) => {

        if (err) {

            response.status(400).send({

                type: type,

                route: "/user/fetchUsers/",

                request: request,

                message: "Failed Fetching Users",

                data: err

            })

        } else {

            response.status(200).send({

                type: type,

                route: "/user/fetchUsers/",

                request: request,

                message: "Users Fetched",

                data: res,

                noOfResults: res.length

            })

        }

    })

};

module.exports.FetchUsers = FetchUsers;