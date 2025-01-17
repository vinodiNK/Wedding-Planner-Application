const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const guestRoutes0007 = require("./routes/GuestRoutes0007");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/guests", guestRoutes0007);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(process.env.PORT || 5001, () =>
            console.log("Guest Management Service running on port 5001")
        );
    })
    .catch((err) => console.log(err));