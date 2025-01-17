const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema0007 = new Schema({
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending",
    },
    dueDate: {
        type: Date,
        required: true,
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task0007",
        required: true,
    },
});

const Task0007 = mongoose.model('Task0007', taskSchema0007);

module.exports = Task0007;