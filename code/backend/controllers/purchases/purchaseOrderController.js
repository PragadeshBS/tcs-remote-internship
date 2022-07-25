const PurchaseOrder = require("../../models/purchases/purchaseOrders");
const mongoose = require("mongoose");

const getPurchasesOrders = async (req, res) => {
  const purchasesOrders = await PurchaseOrder.find({})
    .sort({ createdAt: -1 })
    .populate("vendor")
    .populate("items");
  res.status(200).json(purchasesOrders);
};

const getPurchasesOrder = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid purchases order Id" });
  }
  const purchasesOrder = await PurchaseOrder.findById(id)
    .populate("vendor")
    .populate("items");
  if (!purchasesOrder) {
    return res.status(400).json({ error: "No such purchases order" });
  }
  res.status(200).json(purchasesOrder);
};

const addPurchasesOrder = async (req, res) => {
  const { refNo, orderDate, vendor, items } = req.body;
  const purchasesOrder = await PurchaseOrder.create({
    refNo,
    orderDate,
    vendor,
    items,
  });
  res.status(201).json(purchasesOrder);
};

module.exports = { getPurchasesOrders, addPurchasesOrder, getPurchasesOrder };
