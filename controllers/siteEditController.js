let siteModel = require("../models/siteSchema");

const validator = require("validator");

const ValidateInput = require("../util/Utility");

const verifyToken = require("../util/verifyToken");

const SiteEdit = (type, request, response) => {

    sitePart = request.SITEPART;

    content = request.CONTENT;

    let vT = verifyToken.verifyToken(request.POSTEDBY);

    if (vT === "Error") {

        response.status(404).send({

            type: type,

            route: "/home/siteUpdate/",

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

            route: "/home/siteUpdate/",

            request: request,

            message: "Ops, Your session has expired! You may need to sign in again.",

            data: {

                database: "mongoDB",

                architecture: "mongoose"

            }

        })

    } else {


        if (sitePart === "HOMEPAGECIRCLECONTENT" || sitePart === "OURSERVICESFIRSTCARDFRONTTITLE" || sitePart === "OURSERVICESFIRSTCARDFRONTDESCRIPTION" || sitePart === "OURSERVICESFIRSTCARDBACKCONTENT" || sitePart === "OURSERVICESSECONDCARDFRONTTITLE" || sitePart === "OURSERVICESSECONDCARDFRONTDESCRIPTION" || sitePart === "OURSERVICESSECONDCARDBACKCONTENT" || sitePart === "OURSERVICESTHIRDCARDFRONTTITLE" || sitePart === "OURSERVICESTHIRDCARDFRONTDESCRIPTION" || sitePart === "OURSERVICESTHIRDCARDBACKCONTENT" || sitePart === "CONTACTUSEMAIL" || sitePart === "CONTACTUSTELEPHONE" || sitePart === "FOOTERADDRESS" || sitePart === "FOOTERFACEBOOKURL" || sitePart === "FOOTERINSTAGRAMURL" || sitePart === "FOOTERGOOGLEPLUSURL" || sitePart === "ABOUTUSCONTENT") {

            if (content.length > 0) {

                const updateSite = {
                    ID: 1
                }

                updateSite[sitePart] = content;

                siteModel.find({
                    ID: 1
                }, (err1, ret) => {

                    if (err1) {

                        response.status(400).send({

                            type: type,

                            route: "/home/siteUpdate/",

                            request: request,

                            message: "Sorry, we encountered an error!",

                            data: {

                                database: "mongoDB",

                                architecture: "mongoose"

                            }

                        })

                    } else {

                        // console.log(ret.length)
                        if (ret.length === 0) {

                            let siteSave = new siteModel(updateSite);

                            siteSave.save()

                            .then(() => {

                                response.status(200).send({

                                    type: type,

                                    route: "/home/siteUpdate/",

                                    request: request,

                                    message: "Great! You've just updated the website content.",

                                    data: {

                                        database: "mongoDB",

                                        architecture: "mongoose"

                                    }

                                })

                            })

                            .catch(err => {

                                response.status(400).send({

                                    type: type,

                                    route: "/home/siteUpdate/",

                                    request: request,

                                    message: "Sorry, we encountered an error!",

                                    data: {

                                        database: "mongoDB",

                                        architecture: "mongoose"

                                    }

                                })

                            });

                        } else {

                            siteModel.update({

                            }, updateSite, (err, success) => {

                                if (err) {

                                    response.status(400).send({

                                        type: type,

                                        route: "/home/siteUpdate/",

                                        request: request,

                                        message: "Sorry, we encountered an error!",

                                        data: {

                                            database: "mongoDB",

                                            architecture: "mongoose"

                                        }

                                    })

                                } else {

                                    response.status(200).send({

                                        type: type,

                                        route: "/home/siteUpdate/",

                                        request: request,

                                        message: "Great! You've just updated the website content.",

                                        data: {

                                            database: "mongoDB1",

                                            architecture: "mongoose",

                                            data: updateSite

                                        }

                                    })

                                }

                            })

                        }

                    }

                })


            } else {

                response.status(400).send({

                    type: type,

                    route: "/home/siteUpdate/",

                    request: request,

                    message: "Ops, seems all the fields are not well filled!",

                    data: {

                        database: "mongoDB",

                        architecture: "mongoose"

                    }

                })

            }

        } else {

            response.status(400).send({

                type: type,

                route: "/home/siteUpdate/",

                request: request,

                message: "Ops, seems all the fields are not well filled!",

                data: {

                    database: "mongoDB",

                    architecture: "mongoose"

                }

            })

        }
    }

}

module.exports.SiteEdit = SiteEdit;