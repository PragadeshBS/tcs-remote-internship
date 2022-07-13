const express = require("express");
const { getItems, addItem } = require("../controllers/itemController");
const {
  getAdjustments,
  addAdjustment,
} = require("../controllers/adjustmentsController");
const {
  getItemGroups,
  addItemGroup,
} = require("../controllers/itemGroupController");

const router = express.Router();

router.get("/items", getItems);

router.post("/items", addItem);

router.get("/item-groups", getItemGroups);

router.post("/item-groups", addItemGroup);

router.get("/adjustments", getAdjustments);

router.post("/adjustments", addAdjustment);

module.exports = router;
