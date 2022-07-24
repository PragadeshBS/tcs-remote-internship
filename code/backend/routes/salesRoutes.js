const express = require("express");
const {
  getCustomers,
  addCustomer,
  updateCustomer,
  getCustomer,
} = require("../controllers/sales/customersController");
const {
  createPackage,
  getPackages,
  getPackage,
} = require("../controllers/sales/packageController");
const {
  getSalesOrders,
  addSalesOrder,
  getSalesOrder,
} = require("../controllers/sales/salesorderController");
const {
  getDeliveryChallans,
  createDeliveryChallan,
  getDeliveryChallan,
} = require("../controllers/sales/deliveryChallanController");
const {
  getInvoices,
  getInvoice,
  createInvoice,
} = require("../controllers/sales/invoiceController");
const {
  getPayments,
  addPayment,
} = require("../controllers/sales/paymentController");
const {
  getSalesReturns,
  getSalesReturn,
  addSalesReturn,
  approveSalesReturn,
} = require("../controllers/sales/salesReturnController");
const {
  getCreditNotes,
  getCreditNote,
  addCreditNote,
} = require("../controllers/sales/creditNoteController");

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

// package routes
router.get("/packages", getPackages);
router.get("/packages/:id", getPackage);
router.post("/packages", createPackage);

// delivery challan routes
router.get("/delivery-challans", getDeliveryChallans);
router.get("/delivery-challans/:id", getDeliveryChallan);
router.post("/delivery-challans", createDeliveryChallan);

// invoice routes
router.get("/invoices", getInvoices);
router.get("/invoices/:id", getInvoice);
router.post("/invoices", createInvoice);

// payment routes
router.get("/payments", getPayments);
router.post("/payments", addPayment);

// sales return routes
router.get("/sales-returns", getSalesReturns);
router.get("/sales-returns/:id", getSalesReturn);
router.post("/sales-returns", addSalesReturn);
router.post("/sales-returns/approve", approveSalesReturn);

// credit note routes
router.get("/credit-notes", getCreditNotes);
router.get("/credit-notes/:id", getCreditNote);
router.post("/credit-notes", addCreditNote);

module.exports = router;
