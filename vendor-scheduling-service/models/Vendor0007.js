const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema0007 = new Schema({
    name: {
        type: String,
        required: true,
    },
    serviceType: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor0007",
        required: true,
    },
    schedule: {
        type: Date,
        required: true,
    },
});



const Vendor0007 = mongoose.model('Vendor0007', vendorSchema0007);

module.exports = Vendor0007;