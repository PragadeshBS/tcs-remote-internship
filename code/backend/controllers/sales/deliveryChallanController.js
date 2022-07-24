const DeliveryChallan = require("../../models/sales/deliveryChallanModel");
const mongoose = require("mongoose");

const getDeliveryChallans = async (req, res) => {
  const challans = await DeliveryChallan.find({})
    .sort({ createdAt: -1 })
    .populate("customer")
    .populate("items");
  res.status(200).json(challans);
};

const createDeliveryChallan = async (req, res) => {
  const { refNo, deliveryChallanDate, customer, deliveryChallanType, items } =
    req.body;
  const challan = await DeliveryChallan.create({
    refNo,
    deliveryChallanDate,
    customer,
    deliveryChallanType,
    items,
  });
  res.status(201).json(challan);
};

const getDeliveryChallan = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid challand Id" });
  }
  const challan = await DeliveryChallan.findById(id)
    .populate("customer")
    .populate("items");
  if (!challan) {
    return res.status(400).json({ error: "No such delivery challan" });
  }
  res.status(200).json(challan);
};

module.exports = {
  getDeliveryChallans,
  createDeliveryChallan,
  getDeliveryChallan,
};
