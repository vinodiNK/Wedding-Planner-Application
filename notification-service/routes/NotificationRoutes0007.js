const express = require("express");
const {
    getAllNotifications0007,
    addNotification0007,
    getNotificationById0007,
    updateNotificationStatus0007,
    deleteNotification0007,
} = require("../controllers/NotificationController0007");

const router = express.Router();

router.get("/", getAllNotifications0007);
router.post("/", addNotification0007);
router.get("/:id", getNotificationById0007);
router.put("/:id", updateNotificationStatus0007);
router.delete("/:id", deleteNotification0007);

module.exports = router;