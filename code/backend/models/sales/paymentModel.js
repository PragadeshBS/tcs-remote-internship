const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    paymentNo: {
      type: String,
      required: true,
    },
    paymentDate: {
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
    paymentMode: {
      type: String,
      required: true,
      enum: ["Card", "Net banking", "UPI", "Cash"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
