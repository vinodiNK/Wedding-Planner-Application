const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema0007 = new Schema({
    totalBudget: {
        type: Number,
        required: true,
    },
    expenses: [{
        category: { type: String, required: true },
        amount: { type: Number, required: true },
    }, ],
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Budget0007", // Reference to the events collection
        required: true,
    },
});

//module.exports = mongoose.model("Budget0007", budgetSchema0007);

const Budget0007 = mongoose.model('Budget0007', budgetSchema0007Schema0007);

module.exports = Budget0007;