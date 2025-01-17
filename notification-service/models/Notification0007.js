const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema0007 = new Schema({
    message: {
        type: String,
        required: true,
    },
    recipient: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["Email", "SMS"],
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Sent"],
        default: "Pending",
    },
    relatedId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "relatedModel",
    },
    relatedModel: {
        type: String,
        enum: ["Event0007", "Guest0007", "Vendor0007", "Task0007"],
    },
    scheduledTime: {
        type: Date,
        required: true,
    },
});



const Notification0007 = mongoose.model('Notification0007', notificationSchema0007);

module.exports = Notification0007;