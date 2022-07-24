const {
  getBills,
  getBill,
  createBill,
} = require("../controllers/purchases/billController");
const {
  getPurchasesOrders,
  getPurchasesOrder,
  addPurchasesOrder,
} = require("../controllers/purchases/purchaseOrderController");
const {
  getVendors,
  getVendor,
  addVendor,
  updateVendor,
} = require("../controllers/purchases/vendorController");
const {
  getVendorCreditNotes,
  getVendorCredit,
  createVendorCredit,
} = require("../controllers/purchases/vendorCreditController");

const router = require("express").Router();

// vendor routes
router.get("/vendors", getVendors);
router.get("/vendors/:id", getVendor);
router.post("/vendors", addVendor);
router.patch("/vendors/:id", updateVendor);

// purchases orders routes
router.get("/purchasesorders", getPurchasesOrders);
router.get("/purchasesorders/:id", getPurchasesOrder);
router.post("/purchasesorders", addPurchasesOrder);

// bill routes
router.get("/bills", getBills);
router.get("/bills/:id", getBill);
router.post("/bills", createBill);

// vendor credit routes
router.get("/vendor-credits", getVendorCreditNotes);
router.get("/vendor-credits/:id", getVendorCredit);
router.post("/vendor-credits", createVendorCredit);

module.exports = router;
