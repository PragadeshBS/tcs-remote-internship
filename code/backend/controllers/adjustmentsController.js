const getAdjustments = (req, res) => {
  return res.json({ msg: "get all adjustments" });
};

const addAdjustment = (req, res) => {
  return res.json({ msg: "add a new adjustment" });
};

module.exports = {
  getAdjustments,
  addAdjustment,
};
