const Bill = require("../../models/purchases/billModel");
const mongoose = require("mongoose");

const getBills = async (req, res) => {
  const bills = await Bill.find({})
    .sort({ createdAt: -1 })
    .populate("vendor")
    .populate("items");
  res.status(200).json(bills);
};

const createBill = async (req, res) => {
  const { orderNo, date, vendor, amount, items } = req.body;
  const bill = await Bill.create({
    orderNo,
    date,
    vendor,
    amount,
    items,
  });
  res.status(201).json(bill);
};

const getBill = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid bill Id" });
  }
  const bill = await Bill.findById(id).populate("vendor").populate("items");
  if (!bill) {
    return res.status(400).json({ error: "No such bill" });
  }
  res.status(200).json(bill);
};

module.exports = {
  getBills,
  getBill,
  createBill,
};
