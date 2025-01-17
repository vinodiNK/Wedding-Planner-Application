const express = require("express");
const {
    getAllVendors0007,
    addVendor0007,
    getVendorsById0007,
    deleteVendor0007,
    updateVendor0007,
} = require("../controllers/VendorController0007");

const router = express.Router();

router.get("/", getAllVendors0007);
router.post("/", addVendor0007);
router.get("/:id", getVendorsById0007);
router.put("/:id", updateVendor0007);
router.delete("/:id", deleteVendor0007);

module.exports = router;