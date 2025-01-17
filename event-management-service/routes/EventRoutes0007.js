const express = require("express");
const {
    getAllEvents0007,
    addEvent0007,
    getEventById0007,
    updateEvent0007,
    deleteEvent0007,
} = require("../controllers/EventController0007");

const router = express.Router();

router.get("/", getAllEvents0007);
router.post("/", addEvent0007);
router.get("/:id", getEventById0007);
router.put("/:id", updateEvent0007);
router.delete("/:id", deleteEvent0007);

module.exports = router;