const Budget0007 = require("../models/Budget0007");

// Get all budgets
const getAllBudgets0007 = async(req, res, next) => {
    let budgets;
    try {
        budgets = await Budget0007.find().populate("eventId", "name date venue");
    } catch (err) {
        console.log(err);
    }
    if (!budgets) {
        return res.status(404).json({ message: "Budgets not found" });
    }
    return res.status(200).json({ budgets });
};

// Add a new budget
const addBudget0007 = async(req, res, next) => {
    const { totalBudget, expenses, eventId } = req.body;

    let budget;
    try {
        budget = new Budget0007({ totalBudget, expenses, eventId });
        await budget.save();
    } catch (err) {
        console.log(err);
    }
    if (!budget) {
        return res.status(500).json({ message: "Unable to add budget" });
    }
    return res.status(201).json({ budget });
};

// Get budget by ID
const getBudgetById0007 = async(req, res, next) => {
    const id = req.params.id;

    let budget;
    try {
        budget = await Budget0007.findById(id).populate("eventId", "name date venue");
    } catch (err) {
        console.log(err);
    }
    if (!budget) {
        return res.status(404).json({ message: "Budget not found" });
    }
    return res.status(200).json({ budget });
};

// Update budget expenses
const updateBudgetExpenses0007 = async(req, res, next) => {
    const id = req.params.id;
    const { expenses } = req.body;

    let budget;
    try {
        budget = await Budget0007.findByIdAndUpdate(
            id, { $set: { expenses } }, { new: true }
        );
    } catch (err) {
        console.log(err);
    }
    if (!budget) {
        return res.status(500).json({ message: "Unable to update expenses" });
    }
    return res.status(200).json({ budget });
};

// Delete a budget
const deleteBudget0007 = async(req, res, next) => {
    const id = req.params.id;

    let budget;
    try {
        budget = await Budget0007.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!budget) {
        return res.status(500).json({ message: "Unable to delete budget" });
    }
    return res.status(200).json({ message: "Budget deleted successfully" });
};

module.exports = {
    getAllBudgets0007,
    addBudget0007,
    getBudgetById0007,
    updateBudgetExpenses0007,
    deleteBudget0007,
};