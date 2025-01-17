const Event0007 = require("../models/Event0007");


// Get all events
const getAllEvents0007 = async(req, res, next) => {
    let events;
    try {
        events = await Event0007.find();
    } catch (err) {
        console.log(err);
    }
    if (!events) {
        return res.status(404).json({ message: "Events not found" });
    }
    return res.status(200).json({ events });
};

// Add a new event
const addEvent0007 = async(req, res, next) => {
    const { name, date, venue, type } = req.body;

    let event;
    try {
        event = new Event0007({ name, date, venue, type });
        await event.save();
    } catch (err) {
        console.log(err);
    }
    if (!event) {
        return res.status(500).json({ message: "Unable to add event" });
    }
    return res.status(201).json({ event });
};

// Get event by ID
const getEventById0007 = async(req, res, next) => {
    const id = req.params.id;

    let event;
    try {
        event = await Event0007.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).json({ event });
};

// Update an event
const updateEvent0007 = async(req, res, next) => {
    const id = req.params.id;
    const { name, date, venue, type } = req.body;

    let event;
    try {
        event = await Event0007.findByIdAndUpdate(
            id, { name, date, venue, type }, { new: true }
        );
    } catch (err) {
        console.log(err);
    }
    if (!event) {
        return res.status(500).json({ message: "Unable to update event" });
    }
    return res.status(200).json({ event });
};

// Delete an event
const deleteEvent0007 = async(req, res, next) => {
    const id = req.params.id;

    let event;
    try {
        event = await Event0007.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!event) {
        return res.status(500).json({ message: "Unable to delete event" });
    }
    return res.status(200).json({ message: "Event deleted successfully" });
};

module.exports = {
    getAllEvents0007,
    addEvent0007,
    getEventById0007,
    updateEvent0007,
    deleteEvent0007,
};