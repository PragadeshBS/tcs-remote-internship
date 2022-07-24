const Vendor = require("../../models/purchases/vendorModel");
const mongoose = require("mongoose");

const getVendors = async (req, res) => {
  const vendors = await Vendor.find({}).sort({ createdAt: -1 });
  res.json(vendors);
};

const getVendor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid vendor Id" });
  }
  const vendor = await Vendor.findById(id);
  if (!vendor) {
    return res.status(400).json({ error: "No such vendor" });
  }
  res.status(200).json(vendor);
};

const updateVendor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such vendor" });
  }
  const vendor = await Vendor.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!vendor) {
    return res.status(400).json({ error: "No such vendor" });
  }
  res.status(200).json(vendor);
};

const addVendor = async (req, res) => {
  const { vendorName, company, mobile, email, website } = req.body;
  try {
    const vendor = await Vendor.create({
      vendorName,
      company,
      mobile,
      email,
      website,
    });
    res.status(200).json(vendor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVendor,
  getVendors,
  addVendor,
  updateVendor,
};
