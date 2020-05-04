const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
}, {
        timestamps: true
    }

)

const Event = mongoose.model('Income_Event', eventSchema); //THIS is where the collection name needs to match the table name

module.exports = Event;