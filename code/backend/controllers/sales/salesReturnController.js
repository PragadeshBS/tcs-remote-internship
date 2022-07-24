const SalesReturn = require("../../models/sales/salesReturnModel");
const mongoose = require("mongoose");

const getSalesReturns = async (req, res) => {
  const salesReturns = await SalesReturn.find({})
    .sort({ createdAt: -1 })
    .populate({
      path: "salesOrder",
      populate: [
        {
          path: "customer",
        },
        { path: "items" },
      ],
    });
  res.status(200).json(salesReturns);
};

const getSalesReturn = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid sales return Id" });
  }
  const salesReturn = await SalesReturn.findById(id).populate({
    path: "salesOrder",
    populate: [
      {
        path: "customer",
      },
      { path: "items" },
    ],
  });
  if (!salesReturn) {
    return res.status(400).json({ error: "No such sales return" });
  }
  res.status(200).json(salesReturn);
};

const addSalesReturn = async (req, res) => {
  const { salesOrder, date } = req.body;
  const salesReturn = await SalesReturn.create({
    salesOrder,
    date,
  });
  res.status(201).json(salesReturn);
};

const approveSalesReturn = async (req, res) => {
  const { id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid sales return Id" });
  }
  const salesReturn = await SalesReturn.findByIdAndUpdate(id, {
    status: "Approved",
  });
  if (!salesReturn) {
    return res.status(400).json({ error: "No such sales return" });
  }
  res.status(200).json(salesReturn);
};

module.exports = {
  getSalesReturns,
  getSalesReturn,
  approveSalesReturn,
  addSalesReturn,
};
