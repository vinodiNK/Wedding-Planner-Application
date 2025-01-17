const express = require("express");
const {
    getAllBudgets0007,
    addBudget0007,
    getBudgetById0007,
    updateBudgetExpenses0007,
    deleteBudget0007,
} = require("../controllers/BudgetController0007");

const router = express.Router();

router.get("/", getAllBudgets0007);
router.post("/", addBudget0007);
router.get("/:id", getBudgetById0007);
router.put("/:id", updateBudgetExpenses0007);
router.delete("/:id", deleteBudget0007);

module.exports = router;