const itemGroup = require("../models/itemGroupModel");

const getItemGroups = async (req, res) => {
  const itemGroups = await itemGroup.find({}).sort({ createdAt: -1 });
  res.json(itemGroups);
};

const addItemGroup = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItemGroup = await itemGroup.create({
      name,
      description,
    });
    res.status(200).json(newItemGroup);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getItemGroups,
  addItemGroup,
};
