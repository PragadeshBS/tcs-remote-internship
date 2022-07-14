const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    costPrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    openingStock: {
      type: Number,
      required: true,
    },
    reorderPoint: {
      type: Number,
      required: true,
    },
    preferredVendor: {
      type: String,
      required: true,
    },
    itemGroup: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ItemGroup",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
