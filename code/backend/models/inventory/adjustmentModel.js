const mongoose = require("mongoose");

const adjustmentSchema = mongoose.Schema(
  {
    mode: {
      type: String,
      required: true,
    },
    refNo: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Item",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Adjustment", adjustmentSchema);
