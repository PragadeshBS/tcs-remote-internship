const express = require("express");
const {
  getCustomers,
  addCustomer,
  updateCustomer,
  getCustomer,
} = require("../controllers/sales/customersController");

const router = express.Router();

router.get("/customers", getCustomers);

router.get("/customers/:id", getCustomer);

router.post("/customers", addCustomer);

router.patch("/customers/:id", updateCustomer);

module.exports = router;
