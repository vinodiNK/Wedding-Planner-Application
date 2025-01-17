const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const notificationRoutes0007 = require("./routes/NotificationRoutes0007");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/notifications", notificationRoutes0007);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(process.env.PORT || 5005, () =>
            console.log("Notification Service running on port 5005")
        );
    })
    .catch((err) => console.log(err));