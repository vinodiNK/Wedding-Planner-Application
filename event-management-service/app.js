//8vTEckfXbZDpRK3O

//kyDbsZfZSSprA6Mq
//mongodb+srv://panchalee:<db_password>@cluster0.kt1ec.mongodb.net/


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const eventRoutes0007 = require("./routes/EventRoutes0007");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/events", eventRoutes0007);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(process.env.PORT || 5000, () =>
            console.log("Server running on port 5000")
        );
    })
    .catch((err) => console.log(err));