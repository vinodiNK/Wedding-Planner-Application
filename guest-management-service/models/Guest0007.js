const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema0007 = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    rsvpStatus: {
        type: String,
        enum: ["Pending", "Accepted", "Declined"],
        default: "Pending",
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest0007",
        required: true,
    },
});

const Guest0007 = mongoose.model('Guest0007', guestSchema0007);

module.exports = Guest0007;