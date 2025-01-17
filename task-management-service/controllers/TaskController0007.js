const Task0007 = require("../models/Task0007");

// Get all tasks
const getAllTasks0007 = async(req, res, next) => {
    let tasks;
    try {
        tasks = await Task0007.find().populate("eventId", "name date venue");
    } catch (err) {
        console.log(err);
    }
    if (!tasks) {
        return res.status(404).json({ message: "Tasks not found" });
    }
    return res.status(200).json({ tasks });
};

// Add a new task
const addTask0007 = async(req, res, next) => {
    const { description, status, dueDate, eventId } = req.body;

    let task;
    try {
        task = new Task0007({ description, status, dueDate, eventId });
        await task.save();
    } catch (err) {
        console.log(err);
    }
    if (!task) {
        return res.status(500).json({ message: "Unable to add task" });
    }
    return res.status(201).json({ task });
};

// Get tasks by Event ID
const getTasksById0007 = async(req, res, next) => {
    const id = req.params.id;

    let tasks;
    try {
        tasks = await Task0007.find({ _id: id }).populate("eventId", "name date venue");
    } catch (err) {
        console.log(err);
    }
    if (!tasks) {
        return res.status(404).json({ message: "No tasks found for this event" });
    }
    return res.status(200).json({ tasks });
};

// Update a task
const updateTask0007 = async(req, res, next) => {
    const id = req.params.id;
    const { description, status, dueDate } = req.body;

    let task;
    try {
        task = await Task0007.findByIdAndUpdate(
            id, { description, status, dueDate }, { new: true }
        );
    } catch (err) {
        console.log(err);
    }
    if (!task) {
        return res.status(500).json({ message: "Unable to update task" });
    }
    return res.status(200).json({ task });
};

// Delete a task
const deleteTask0007 = async(req, res, next) => {
    const id = req.params.id;

    let task;
    try {
        task = await Task0007.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!task) {
        return res.status(500).json({ message: "Unable to delete task" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
};

module.exports = {
    getAllTasks0007,
    addTask0007,
    getTasksById0007,
    updateTask0007,
    deleteTask0007,
};