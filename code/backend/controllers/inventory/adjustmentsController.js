const Adjustment = require("../../models/inventory/adjustmentModel");

const getAdjustments = async (req, res) => {
  const adjustments = await Adjustment.find({}).sort({ createdAt: -1 });
  res.json(adjustments);
};

const addAdjustment = async (req, res) => {
  const { mode, refNo, date, reason, description, item } = req.body;
  try {
    const newAdjustment = await Adjustment.create({
      mode,
      refNo,
      date,
      reason,
      description,
      item,
    });
    res.status(200).json(newAdjustment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAdjustments,
  addAdjustment,
};
