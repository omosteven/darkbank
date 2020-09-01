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

// console.log(verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFTUFJTCI6ImRhcmtiYW5rQGdtYWlsLmNvbSIsImlhdCI6MTU5ODg5MzY4MywiZXhwIjoxNTk4ODk3MjgzfQ.rfL7__JatY0CNUuHzez73WzCO8_jgC0o1SBbbh0Nr-g"))
// verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFTUFJTCI6ImRhcmtiYW5rQGdtYWlsLmNvbSIsImlhdCI6MTU5ODgyMDYyMiwiZXhwIjoxNTk4ODI0MjIyfQ.oGSroSYTeg0Q3D9Lo9B_NEo2etec9N7Jo3rNLidFwJk");