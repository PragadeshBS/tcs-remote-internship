const mongoose = require("mongoose");

const creditNoteSchema = mongoose.Schema(
  {
    invoiceNo: {
      type: mongoose.Types.ObjectId,
      ref: "Invoice",
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    creditNoteDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CreditNote", creditNoteSchema);
