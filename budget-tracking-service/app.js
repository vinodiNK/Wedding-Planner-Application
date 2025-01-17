const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const budgetRoutes0007 = require("./routes/BudgetRoutes0007");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/budgets", budgetRoutes0007);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(process.env.PORT || 5003, () =>
            console.log("Budget Tracking Service running on port 5003")
        );
    })
    .catch((err) => console.log(err));