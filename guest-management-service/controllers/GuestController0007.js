const Guest0007 = require('../models/Guest0007'); // Make sure you have this import

const getAllGuests0007 = async(req, res, next) => {
    try {
        const guests = await Guest0007.find().populate("eventId", "name date venue");

        if (!guests || guests.length === 0) { // Check for null OR empty array
            return res.status(404).json({ message: "No guests found" }); // More accurate message
        }

        return res.status(200).json({ guests });
    } catch (err) {
        console.error("Error fetching guests:", err); // Use console.error for errors
        return res.status(500).json({ message: "Internal server error" }); // Send 500 for server errors
    }
};

// Add a new guest
const addGuest0007 = async(req, res, next) => {
    const { name, email, phone, rsvpStatus, eventId } = req.body;

    let guest;
    try {
        guest = new Guest0007({ name, email, phone, rsvpStatus, eventId });
        await guest.save();
    } catch (err) {
        console.log(err);
    }
    if (!guest) {
        return res.status(500).json({ message: "Unable to add guest" });
    }
    return res.status(201).json({ guest });
};

// Get guests by Event ID
const getGuestsById0007 = async(req, res, next) => {
    const id = req.params.id;

    let guests;
    try {
        guests = await Guest0007.find({ _id: id }).populate("eventId", "name date venue");
    } catch (err) {
        console.log(err);
    }
    if (!guests) {
        return res.status(404).json({ message: "No guests found for this event" });
    }
    return res.status(200).json({ guests });
};


// Update a guest
const updateGuest0007 = async(req, res, next) => {
    const id = req.params.id;
    const { name, email, phone, rsvpStatus } = req.body;

    try {
        const updatedGuest = await Guest0007.findByIdAndUpdate(
            id, { name, email, phone, rsvpStatus }, { new: true, runValidators: true }
        );

        if (!updatedGuest) {
            return res.status(404).json({ message: "Guest not found" });
        }

        return res.status(200).json({ message: "Guest updated successfully", updatedGuest });
    } catch (err) {
        console.error("Error updating guest:", err);
        return res.status(500).json({ message: "Failed to update guest" });
    }
};

// Delete a guest
const deleteGuest0007 = async(req, res, next) => {
    const id = req.params.id;

    let guest;
    try {
        guest = await Guest0007.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!guest) {
        return res.status(500).json({ message: "Unable to delete guest" });
    }
    return res.status(200).json({ message: "Guest deleted successfully" });
};

module.exports = {
    getAllGuests0007,
    addGuest0007,
    getGuestsById0007,
    deleteGuest0007,
    updateGuest0007,
};