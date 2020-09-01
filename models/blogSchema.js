const mongoose = require("mongoose");

const validator = require("validator");

const timestamps = require('mongoose-timestamp');

const blogSchema = mongoose.Schema({

    POSTEDBY: {
        type: String,
        required: true,
        unique: false,
        lowercase: true
    },

    BLOGTITLE: {
        type: String,
        required: true
    },

    BLOGPOST: {
        type: String,
        required: true
    },

    BLOGIMAGE: {
        type: String,
        required: true
    },

    BLOGURL: {
        type: String,
        required: true,
        unique: true
    },

    QUERYPERIOD: {
        type: Date,
        default: Date.now
    }

});

blogSchema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model("BLOGDATA", blogSchema);