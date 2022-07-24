const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema(
  {
    vendorName: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);
