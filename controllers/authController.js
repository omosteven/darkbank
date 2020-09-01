let AuthModel = require('../models/authSchema');

const validator = require("validator");

const ValidateInput = require("../util/Utility");

var passwordHash = require('bcryptjs');

var jwt = require("jsonwebtoken");

const verifyToken = require("../util/verifyToken");
// const express = require('express');
// const session = require('express-session');
// const app = express();

var Auth = function Auth(type, request, response) {

    if (type === "Create Account") {

        const {

            FIRSTNAME,
            LASTNAME,
            EMAIL,
            PASSWORD

        } = request;

        // validate Payloads

        if (ValidateInput.ValidateInput({

                FIRSTNAME,
                LASTNAME,
                EMAIL,
                PASSWORD

            }, request)) {

            if (validator.isEmail(EMAIL)) { //validate email

                var hashedPassword = passwordHash.hashSync(PASSWORD, 10);

                request.PASSWORD = hashedPassword;
                // console.log(request);
                if (validator.isAlpha(FIRSTNAME) & validator.isAlpha(LASTNAME)) { //validate email

                    let SignUp = new AuthModel(request);

                    SignUp.save()

                    .then(() => {
                        response.status(200).send({
                            type: type,
                            route: "/auth/register/",
                            request: request,
                            message: "Account Created",
                            data: {
                                database: "mongoDB",
                                architecture: "mongoose"
                            }
                        })
                    })

                    .catch(err => {

                        if (err.keyPattern.EMAIL === 1) {

                            response.status(400).send({
                                type: type,
                                route: "/auth/register/",
                                request: request,
                                message: "This email is associated with an existing account",
                                data: {
                                    database: "mongoDB",
                                    architecture: "mongoose"
                                }
                            })

                        } else {

                            response.status(400).send({
                                type: type,
                                route: "/auth/register/",
                                request: request,
                                message: "We're sorry, an error occurred. Kindly try again!",
                                data: {
                                    database: "mongoDB",
                                    architecture: "mongoose"
                                }
                            })
                        }
                    })

                } else {
                    response.status(401).send({
                        type: type,
                        route: "/auth/register/",
                        request: request,
                        message: "We're sorry, seems your first or last name contains a non alphabetic character",
                        data: {
                            database: "mongoDB",
                            architecture: "mongoose"
                        }
                    })
                }

            } else {
                response.status(401).send({
                    type: type,
                    route: "/auth/register/",
                    request: request,
                    message: "The email entered is not valid!",
                    data: {
                        database: "mongoDB",
                        architecture: "mongoose"
                    }
                })
            }
        } else {
            response.status(401).send({
                type: type,
                route: "/auth/register/",
                request: request,
                message: "Invalid Payload",
                data: {
                    database: "mongoDB",
                    architecture: "mongoose"
                }
            })
        }
    } else if (type === "Sign Into Your Account") {

        const {

            EMAIL,
            PASSWORD

        } = request;

        // validate Payloads

        if (ValidateInput.ValidateInput({

                EMAIL,
                PASSWORD

            }, request)) {

            if (validator.isEmail(EMAIL)) { //validate email


                const jwtKey = "my_secret_key"

                const jwtExpirySeconds = 3600

                const token = jwt.sign({
                    EMAIL
                }, jwtKey, {

                    algorithm: "HS256",

                    expiresIn: jwtExpirySeconds,

                })

                AuthModel.findOneAndUpdate({
                    EMAIL: EMAIL
                }, {
                    TOKEN: token
                }, (err, res) => {
                    if (err) {
                        response.status(401).send({
                            type: type,
                            route: "/auth/signin/",
                            request: request,
                            message: "An Error Occurred",
                            data: {
                                database: "mongoDB",
                                architecture: "mongoose"
                            }
                        })
                    } else {
                        //    Perform verification
                        var validPasswordTest = passwordHash.compareSync(PASSWORD, res.PASSWORD);
                        // we can change algorithm used
                        // jwt.sign({
                        //     foo: 'bar'
                        // }, cert, {
                        //     algorithm: 'RS256'
                        // }, function(err, token) {
                        //     console.log(token);
                        // }); // we can set expiration time using sync
                        // const token = jwt.sign({
                        //     data: 'foobar'
                        // }, 'secret', {
                        //     expiresIn: 60 * 60
                        // });


                        if (validPasswordTest) {
                            response.status(200).send({
                                type: type,
                                route: "/auth/signin/",
                                request: request,
                                message: "User Logged In!",
                                data: {
                                    database: "mongoDB",
                                    architecture: "mongoose"
                                },
                                token: token
                            })
                        } else {
                            response.status(401).send({
                                type: type,
                                route: "/auth/signin/",
                                request: request,
                                message: "Ops! You've just entered incorrect login details.",
                                data: {
                                    database: "mongoDB",
                                    architecture: "mongoose"
                                }
                            })
                        }
                    }
                })



                // response.status(200).send({
                //     type: type,
                //     route: "/auth/signin/",
                //     request: request,
                //     message: "Login Successfu;",
                //     data: {
                //         database: "mongoDB",
                //         architecture: "mongoose"
                //     }
                // })

            } else {
                response.status(401).send({
                    type: type,
                    route: "/auth/signin/",
                    request: request,
                    message: "Invalid Email",
                    data: {
                        database: "mongoDB",
                        architecture: "mongoose"
                    }
                })
            }
        } else {
            response.status(401).send({
                type: type,
                route: "/auth/signin/",
                request: request,
                message: "Invalid Payload",
                data: {
                    database: "mongoDB",
                    architecture: "mongoose"
                }
            })
        }
    } else {

        response.status(404).send({
            type: type,
            route: "/auth/",
            request: request,
            message: "Wrong Entry!",
            data: {
                database: "mongoDB",
                architecture: "mongoose"
            }
        })

    }

}

module.exports.Auth = Auth;