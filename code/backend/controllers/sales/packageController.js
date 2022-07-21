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

module.exports = { createPackage, getPackages };
