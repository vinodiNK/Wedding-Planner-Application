const express = require("express");
const {
    getAllGuests0007,
    addGuest0007,
    deleteGuest0007,
    updateGuest0007,
    getGuestsById0007,
} = require("../controllers/GuestController0007");

const router = express.Router();

router.get("/", getAllGuests0007);
router.post("/", addGuest0007);
router.get("/:id", getGuestsById0007);
router.put("/:id", updateGuest0007);
router.delete("/:id", deleteGuest0007);

module.exports = router;