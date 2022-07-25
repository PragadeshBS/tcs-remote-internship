const mongoose = require("mongoose");

const salesOrderSchema = mongoose.Schema({
  refNo: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  shipmentDate: {
    type: Date,
  },
  expectedDeliveryDate: {
    type: Date,
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ["Order Placed", "Shipped", "Delivered"],
    default: "Order Placed",
  },
  items: {
    type: [mongoose.Types.ObjectId],
    ref: "Item",
    required: true,
  },
});

module.exports = mongoose.model("SalesOrder", salesOrderSchema);
