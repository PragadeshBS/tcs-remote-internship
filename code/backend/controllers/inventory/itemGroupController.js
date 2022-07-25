const ItemGroup = require("../../models/inventory/itemGroupModel");

const getItemGroups = async (req, res) => {
  const itemGroups = await ItemGroup.find({}).sort({ createdAt: -1 });
  res.json(itemGroups);
};

const addItemGroup = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItemGroup = await ItemGroup.create({
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
