const mongoose = require("mongoose");

const billSchema = mongoose.Schema({
  orderNo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  vendor: {
    type: mongoose.Types.ObjectId,
    ref: "Vendor",
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

module.exports = mongoose.model("Bill", billSchema);
