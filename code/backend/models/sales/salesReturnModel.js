const mongoose = require("mongoose");

const salesReturnSchema = mongoose.Schema(
  {
    salesOrder: {
      type: mongoose.Types.ObjectId,
      ref: "SalesOrder",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Returned", "Approved"],
      default: "Returned",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SalesReturn", salesReturnSchema);
