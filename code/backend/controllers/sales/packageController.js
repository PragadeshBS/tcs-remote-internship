const mongoose = require("mongoose");
const Package = require("../../models/sales/packageModel");
const SalesOrder = require("../../models/sales/salesOrderModel");

const createPackage = async (req, res) => {
  const { packageNo, salesOrder } = req.body;
  await SalesOrder.findByIdAndUpdate(salesOrder, { orderStatus: "Shipped" });
  const package = await Package.create({ packageNo, salesOrder });
  res.status(201).json(package);
};

const getPackages = async (req, res) => {
  const packages = await Package.find({}).populate({
    path: "salesOrder",
    populate: {
      path: "customer",
    },
  });
  res.status(200).json(packages);
};

const getPackage = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid package Id" });
  }
  const pkg = await Package.findById(id).populate({
    path: "salesOrder",
    populate: [
      {
        path: "customer",
      },
      { path: "items" },
    ],
  });
  if (!pkg) {
    return res.status(400).json({ error: "No such package" });
  }
  res.status(200).json(pkg);
};

module.exports = { createPackage, getPackage, getPackages };
