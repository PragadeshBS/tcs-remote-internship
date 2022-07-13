const getItemGroups = (req, res) => {
  return res.json({ msg: "get all item groups" });
};

const addItemGroup = (req, res) => {
  return res.json({ msg: "add item group" });
};

module.exports = {
  getItemGroups,
  addItemGroup,
};
