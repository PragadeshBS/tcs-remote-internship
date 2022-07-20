const SalesOrder = require("../../models/sales/salesOrderModel");
const mongoose = require("mongoose");

const getSalesOrders = async (req, res) => {
  const salesOrders = await SalesOrder.find({})
    .sort({ createdAt: -1 })
    .populate("customer")
    .populate("items");
  res.status(200).json(salesOrders);
};

const getSalesOrder = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid sales order Id" });
  }
  const salesOrder = await SalesOrder.findById(id)
    .populate("customer")
    .populate("items");
  if (!salesOrder) {
    return res.status(400).json({ error: "No such sales order" });
  }
  res.status(200).json(salesOrder);
};

const addSalesOrder = async (req, res) => {
  const {
    refNo,
    orderDate,
    shipmentDate,
    expectedDeliveryDate,
    customer,
    items,
  } = req.body;
  const salesOrder = await SalesOrder.create({
    refNo,
    orderDate,
    shipmentDate,
    expectedDeliveryDate,
    customer,
    items,
  });
  res.status(201).json(salesOrder);
};

module.exports = { getSalesOrders, addSalesOrder, getSalesOrder };
