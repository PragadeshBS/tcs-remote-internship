const Item = require("../../models/inventory/itemModel");
const mongoose = require("mongoose");

const getItems = async (req, res) => {
  const items = await Item.find({})
    .sort({ createdAt: -1 })
    .populate("itemGroup");
  res.json(items);
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such item" });
  }
  const item = await Item.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!item) {
    return res.status(400).json({ error: "No such item" });
  }
  res.status(200).json(item);
};

const addItem = async (req, res) => {
  const {
    name,
    unit,
    dimensions,
    weight,
    manufacturer,
    brand,
    sellingPrice,
    costPrice,
    description,
    openingStock,
    reorderPoint,
    preferredVendor,
    itemGroup,
  } = req.body;
  try {
    const item = await Item.create({
      name,
      unit,
      dimensions,
      weight,
      manufacturer,
      brand,
      sellingPrice,
      costPrice,
      description,
      openingStock,
      reorderPoint,
      preferredVendor,
      itemGroup,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getItems,
  addItem,
  updateItem,
};
