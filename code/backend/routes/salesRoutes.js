const express = require("express");
const {
  getCustomers,
  addCustomer,
  updateCustomer,
  getCustomer,
} = require("../controllers/sales/customersController");
const {
  getSalesOrders,
  addSalesOrder,
  getSalesOrder,
} = require("../controllers/sales/salesorderController");

const router = express.Router();

// customer routes
router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", addCustomer);
router.patch("/customers/:id", updateCustomer);

// sales order routes
router.get("/salesorders", getSalesOrders);
router.get("/salesorders/:id", getSalesOrder);
router.post("/salesorders", addSalesOrder);

module.exports = router;
