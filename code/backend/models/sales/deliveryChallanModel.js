const mongoose = require("mongoose");

const deliverChallanSchema = mongoose.Schema(
  {
    refNo: {
      type: String,
      required: true,
    },
    deliveryChallanDate: {
      type: Date,
      required: true,
    },
    customer: {
      type: mongoose.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    deliveryChallanType: {
      type: String,
      required: true,
      enum: ["Job Work", "Supply on Approval", "Others"],
    },
    items: {
      type: [mongoose.Types.ObjectId],
      ref: "Item",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliveryChallan", deliverChallanSchema);
