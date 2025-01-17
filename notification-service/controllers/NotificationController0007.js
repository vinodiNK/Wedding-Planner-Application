const Notification0007 = require("../models/Notification0007");

// Get all notifications
const getAllNotifications0007 = async(req, res, next) => {
    let notifications;
    try {
        notifications = await Notification0007.find();
    } catch (err) {
        console.log(err);
    }
    if (!notifications) {
        return res.status(404).json({ message: "Notifications not found" });
    }
    return res.status(200).json({ notifications });
};

// Add a new notification
const addNotification0007 = async(req, res, next) => {
    const { message, recipient, type, relatedId, relatedModel, scheduledTime } = req.body;

    let notification;
    try {
        notification = new Notification0007({
            message,
            recipient,
            type,
            relatedId,
            relatedModel,
            scheduledTime,
        });
        await notification.save();
    } catch (err) {
        console.log(err);
    }
    if (!notification) {
        return res.status(500).json({ message: "Unable to add notification" });
    }
    return res.status(201).json({ notification });
};

// Get notification by ID
const getNotificationById0007 = async(req, res, next) => {
    const id = req.params.id;

    let notification;
    try {
        notification = await Notification0007.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!notification) {
        return res.status(404).json({ message: "Notification not found" });
    }
    return res.status(200).json({ notification });
};

// Update notification status
const updateNotificationStatus0007 = async(req, res, next) => {
    const id = req.params.id;
    const { status } = req.body;

    let notification;
    try {
        notification = await Notification0007.findByIdAndUpdate(
            id, { status }, { new: true }
        );
    } catch (err) {
        console.log(err);
    }
    if (!notification) {
        return res.status(500).json({ message: "Unable to update status" });
    }
    return res.status(200).json({ notification });
};

// Delete a notification
const deleteNotification0007 = async(req, res, next) => {
    const id = req.params.id;

    let notification;
    try {
        notification = await Notification0007.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!notification) {
        return res.status(500).json({ message: "Unable to delete notification" });
    }
    return res.status(200).json({ message: "Notification deleted successfully" });
};

module.exports = {
    getAllNotifications0007,
    addNotification0007,
    getNotificationById0007,
    updateNotificationStatus0007,
    deleteNotification0007,
};