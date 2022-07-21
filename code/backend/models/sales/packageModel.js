const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
  packageNo: {
    type: String,
    required: true,
  },
  salesOrder: {
    type: mongoose.Types.ObjectId,
    ref: "SalesOrder",
  },
});

module.exports = mongoose.model("Package", packageSchema);
