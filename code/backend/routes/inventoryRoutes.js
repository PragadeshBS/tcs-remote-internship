const express = require("express");
const {
  getItems,
  addItem,
  updateItem,
} = require("../controllers/inventory/itemController");
const {
  getAdjustments,
  addAdjustment,
} = require("../controllers/inventory/adjustmentsController");
const {
  getItemGroups,
  addItemGroup,
} = require("../controllers/inventory/itemGroupController");

const router = express.Router();

router.get("/items", getItems);

router.post("/items", addItem);

router.patch("/items/:id", updateItem);

router.get("/item-groups", getItemGroups);

router.post("/item-groups", addItemGroup);

router.get("/adjustments", getAdjustments);

router.post("/adjustments", addAdjustment);

module.exports = router;
