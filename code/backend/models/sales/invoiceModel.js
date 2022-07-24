const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
  orderNo: {
    type: String,
    required: true,
  },
  invoiceDate: {
    type: Date,
    required: true,
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  items: {
    type: [mongoose.Types.ObjectId],
    ref: "Item",
    required: true,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
