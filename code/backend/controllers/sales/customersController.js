const Customer = require("../../models/sales/customerModel");
const mongoose = require("mongoose");

const getCustomers = async (req, res) => {
  const customers = await Customer.find({}).sort({ createdAt: -1 });
  res.json(customers);
};

const getCustomer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid customer Id" });
  }
  const customer = await Customer.findById(id);
  if (!customer) {
    return res.status(400).json({ error: "No such customer" });
  }
  res.status(200).json(customer);
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such customer" });
  }
  const customer = await Customer.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!customer) {
    return res.status(400).json({ error: "No such customer" });
  }
  res.status(200).json(customer);
};

const addCustomer = async (req, res) => {
  const { customerName, company, mobile, email } = req.body;
  try {
    const customer = await Customer.create({
      customerName,
      company,
      mobile,
      email,
    });
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addCustomer,
  updateCustomer,
  getCustomers,
  getCustomer,
};
