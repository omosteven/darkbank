const mongoose = require("mongoose");

var timestamps = require('mongoose-timestamp');

const authSchema = new mongoose.Schema({

    EMAIL: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    PASSWORD: {
        type: String,
        required: true,
        length: 8
    },

    FIRSTNAME: {
        type: String,
        required: true
    },

    LASTNAME: {
        type: String,
        required: true
    },

    ADMINLEVEL: {
        type: String
    },

    TOKEN: {
        type: String
    },

    QUERYPERIOD: {
        type: Date,
        default: Date.now
    }
});

authSchema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model("USERDATA", authSchema);