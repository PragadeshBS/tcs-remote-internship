const mongoose = require("mongoose");

const vendorCreditSchema = mongoose.Schema(
  {
    creditNoteNo: {
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
    items: {
      type: [mongoose.Types.ObjectId],
      ref: "Item",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VendorCredit", vendorCreditSchema);
