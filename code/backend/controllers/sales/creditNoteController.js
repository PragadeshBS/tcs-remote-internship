const CreditNote = require("../../models/sales/creditNoteModel");
const mongoose = require("mongoose");

const getCreditNotes = async (req, res) => {
  const creditNotes = await CreditNote.find({})
    .sort({ createdAt: -1 })
    .populate({
      path: "invoiceNo",
      populate: "customer",
    });
  res.status(200).json(creditNotes);
};

const addCreditNote = async (req, res) => {
  const { invoiceNo, reason, creditNoteDate } = req.body;
  const creditNote = await CreditNote.create({
    invoiceNo,
    reason,
    creditNoteDate,
  });
  res.status(201).json(creditNote);
};

const getCreditNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id" });
  }
  const creditNote = await CreditNote.findById(id).populate("invoiceNo");
  if (!creditNote) {
    return res.status(400).json({ error: "No such credit note" });
  }
  res.status(200).json(creditNote);
};

module.exports = {
  getCreditNotes,
  getCreditNote,
  addCreditNote,
};
