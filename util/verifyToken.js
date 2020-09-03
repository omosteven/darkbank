const jwt = require("jsonwebtoken");

let verifyModel = require("../models/authSchema");

const verifyToken = (token) => {

    try {

        payload = jwt.verify(token, "my_secret_key");
        // console.log("payload", payload);
        return payload.EMAIL
            // verifyModel.findOne({ EMAIL: payload.EMAIL, TOKEN: token }, (err, res) => {
            //     if (err) {
            //         return "Error"
            //     } else {
            //         // console.log("email", payload.EMAIL)
            //         // return payload.EMAIL;
            //         return "omosteven123@gmail.com"
            //     }
            // })

    } catch (e) {

        if (e instanceof jwt.JsonWebTokenError) {
            return "Expired!"

        } else {

            return "Error"

        }

    }

}

module.exports.verifyToken = verifyToken;