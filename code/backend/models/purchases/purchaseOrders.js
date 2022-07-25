const mongoose = require("mongoose");

const purchaseOrderSchema = mongoose.Schema(
  {
    refNo: {
      type: String,
      required: true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    vendor: {
      type: mongoose.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    items: {
      type: [mongoose.Types.ObjectId],
      ref: "Item",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PurchaseOrder", purchaseOrderSchema);
