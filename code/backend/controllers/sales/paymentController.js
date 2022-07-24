const Payment = require("../../models/sales/paymentModel");

const getPayments = async (req, res) => {
  const payments = await Payment.find({})
    .sort({ createdAt: -1 })
    .populate("customer");
  res.status(200).json(payments);
};

const addPayment = async (req, res) => {
  const { paymentNo, paymentDate, customer, amount, paymentMode } = req.body;
  const payment = await Payment.create({
    paymentNo,
    paymentDate,
    customer,
    amount,
    paymentMode,
  });
  res.status(201).json(payment);
};

module.exports = { getPayments, addPayment };
