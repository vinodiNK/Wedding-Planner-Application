const Vendor0007 = require("../models/Vendor0007");

// Get all vendors
const getAllVendors0007 = async(req, res, next) => {
    let vendors;
    try {
        vendors = await Vendor0007.find().populate("eventId", "name date venue");
    } catch (err) {
        console.log(err);
    }
    if (!vendors) {
        return res.status(404).json({ message: "Vendors not found" });
    }
    return res.status(200).json({ vendors });
};

// Add a new vendor
const addVendor0007 = async(req, res, next) => {
    const { name, serviceType, contactInfo, eventId, schedule } = req.body;

    let vendor;
    try {
        vendor = new Vendor0007({ name, serviceType, contactInfo, eventId, schedule });
        await vendor.save();
    } catch (err) {
        console.log(err);
    }
    if (!vendor) {
        return res.status(500).json({ message: "Unable to add vendor" });
    }
    return res.status(201).json({ vendor });
};

// Get vendors by Event ID
const getVendorsById0007 = async(req, res, next) => {
    const id = req.params.id;

    let vendors;
    try {
        vendors = await Vendor0007.find({ _id: id }).populate("eventId", "name date venue");
    } catch (err) {
        console.log(err);
    }
    if (!vendors) {
        return res.status(404).json({ message: "No vendors found for this event" });
    }
    return res.status(200).json({ vendors });
};

// Update a vendor
const updateVendor0007 = async(req, res, next) => {
    const id = req.params.id;
    const { name, serviceType, contactInfo, schedule } = req.body;

    try {
        const updatedVendor = await Vendor0007.findByIdAndUpdate(
            id, { name, serviceType, contactInfo, schedule }, { new: true, runValidators: true }
        );

        if (!updatedVendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }

        return res.status(200).json({ message: "Vendor updated successfully", updatedVendor });
    } catch (err) {
        console.error("Error updating vendor:", err);
        return res.status(500).json({ message: "Failed to update vendor" });
    }
};



// Delete a vendor
const deleteVendor0007 = async(req, res, next) => {
    const id = req.params.id;

    let vendor;
    try {
        vendor = await Vendor0007.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!vendor) {
        return res.status(500).json({ message: "Unable to delete vendor" });
    }
    return res.status(200).json({ message: "Vendor deleted successfully" });
};

module.exports = {
    getAllVendors0007,
    addVendor0007,
    getVendorsById0007,
    updateVendor0007,
    deleteVendor0007,

};