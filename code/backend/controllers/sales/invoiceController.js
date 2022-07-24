const Invoice = require("../../models/sales/invoiceModel");
const mongoose = require("mongoose");

const getInvoices = async (req, res) => {
  const invoices = await Invoice.find({})
    .sort({ createdAt: -1 })
    .populate("customer")
    .populate("items");
  res.status(200).json(invoices);
};

const createInvoice = async (req, res) => {
  const { orderNo, invoiceDate, customer, amount, items } = req.body;
  const invoice = await Invoice.create({
    orderNo,
    invoiceDate,
    customer,
    amount,
    items,
  });
  res.status(201).json(invoice);
};

const getInvoice = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid invoice Id" });
  }
  const invoice = await Invoice.findById(id)
    .populate("customer")
    .populate("items");
  if (!invoice) {
    return res.status(400).json({ error: "No such invoice" });
  }
  res.status(200).json(invoice);
};

module.exports = {
  getInvoices,
  getInvoice,
  createInvoice,
};
