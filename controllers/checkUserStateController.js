const verifyToken = require("../util/verifyToken");

const checkUserState = (type, request, response) => {

    let vT = verifyToken.verifyToken(request.token);

    if (vT === "Error") {
        response.status(404).send({
            type: type,
            route: "/user/checkUserState",
            request: request,
            message: "Sorry, an error occurred!",
            data: {
                database: "mongoDB",
                architecture: "mongoose"
            }
        })
    } else if (vT === "Expired!") {
        response.status(402).send({
            type: type,
            route: "/user/checkUserState",
            request: request,
            message: "Ops, Your session has expired! You may need to sign in again.",
            data: {
                database: "mongoDB",
                architecture: "mongoose"
            }
        })
    } else {
        response.status(200).send({
            type: type,
            route: "/user/checkUserState",
            request: request,
            message: "User Still Active",
            email: vT,
            data: {
                database: "mongoDB",
                architecture: "mongoose"
            }
        })
    }
}

module.exports.checkUserState = checkUserState;