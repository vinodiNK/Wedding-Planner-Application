const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes0007 = require("./routes/TaskRoutes0007");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/tasks", taskRoutes0007);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(process.env.PORT || 5004, () =>
            console.log("Task Management Service running on port 5004")
        );
    })
    .catch((err) => console.log(err));