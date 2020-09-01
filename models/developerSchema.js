const mongoose = require("mongoose");

const validator = require("validator");

const timestamps = require('mongoose-timestamp');

const developerSchema = mongoose.Schema({

    POSTEDBY: {
        type: String,
        required: true,
        unique: false,
        lowercase: true
    },

    JOBTITLE: {
        type: String,
        required: true
    },

    JOBROLES: {
        type: String,
        required: true
    },

    JOBIMAGE: {
        type: String,
        required: true
    },

    JOBURL: {
        type: String,
        required: true,
        unique: true
    },

    JOBSALARYSTARTRANGE: {
        type: String,
        required: true,
        unique: true
    },

    JOBSALARYENDRANGE: {
        type: String,
        required: true,
        unique: true
    },

    QUERYPERIOD: {
        type: Date,
        default: Date.now
    }

});

developerSchema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model("DEVELOPERDATA", developerSchema);