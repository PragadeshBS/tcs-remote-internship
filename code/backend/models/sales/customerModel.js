const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  customerName: {
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
});

module.exports = mongoose.model("Customer", customerSchema);
