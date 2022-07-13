const Item = require("../models/itemModel");

const getItems = async (req, res) => {
  const items = await Item.find({}).sort({ createdAt: -1 });
  res.json(items);
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
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getItems,
  addItem,
};
