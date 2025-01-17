const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const vendorRoutes0007 = require("./routes/VendorRoutes0007");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/vendors", vendorRoutes0007);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(process.env.PORT || 5002, () =>
            console.log("Vendor Scheduling Service running on port 5002")
        );
    })
    .catch((err) => console.log(err));