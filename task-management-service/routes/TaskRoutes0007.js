const express = require("express");
const {
    getAllTasks0007,
    addTask0007,
    getTasksById0007,
    updateTask0007,
    deleteTask0007,
} = require("../controllers/TaskController0007");

const router = express.Router();

router.get("/", getAllTasks0007);
router.post("/", addTask0007);
router.get("/:id", getTasksById0007);
router.put("/:id", updateTask0007);
router.delete("/:id", deleteTask0007);

module.exports = router;