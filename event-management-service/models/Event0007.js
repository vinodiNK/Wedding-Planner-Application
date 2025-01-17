const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema0007 = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});


const Event0007 = mongoose.model('Event0007', eventSchema0007);

module.exports = Event0007;