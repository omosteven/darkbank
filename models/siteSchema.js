const mongoose = require("mongoose");

const validator = require("validator");

const timestamps = require('mongoose-timestamp');

const siteSchema = mongoose.Schema({

    ID: {
        type: Number
    },

    MODIFIEDBY: {
        type: String
    },

    HOMEPAGECIRCLECONTENT: {
        type: String
    },

    OURSERVICESFIRSTCARDFRONTTITLE: {
        type: String
    },

    OURSERVICESFIRSTCARDFRONTDESCRIPTION: {
        type: String
    },

    OURSERVICESFIRSTCARDBACKCONTENT: {
        type: String
    },
    OURSERVICESSECONDCARDFRONTTITLE: {
        type: String
    },

    OURSERVICESSECONDCARDFRONTDESCRIPTION: {
        type: String
    },

    OURSERVICESSECONDCARDBACKCONTENT: {
        type: String
    },
    OURSERVICESTHIRDCARDFRONTTITLE: {
        type: String
    },

    OURSERVICESTHIRDCARDFRONTDESCRIPTION: {
        type: String
    },

    OURSERVICESTHIRDCARDBACKCONTENT: {
        type: String
    },
    CONTACTUSEMAIL: {
        type: String
    },

    CONTACTUSTELEPHONE: {
        type: String
    },

    FOOTERADDRESS: {
        type: String
    },
    FOOTERFACEBOOKURL: {
        type: String
    },

    FOOTERINSTAGRAMURL: {
        type: String
    },

    FOOTERGOOGLEPLUSURL: {
        type: String
    },
    ABOUTUSCONTENT: {
        type: String
    }

});

siteSchema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model("SITEEDITDATA", siteSchema);