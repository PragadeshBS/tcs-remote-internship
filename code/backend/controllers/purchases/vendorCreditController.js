const VendorCredit = require("../../models/purchases/vendorCreditModel");

const getVendorCreditNotes = async (req, res) => {
  const vendorCredits = await VendorCredit.find({})
    .sort({ createdAt: -1 })
    .populate("vendor");
  res.status(200).json(vendorCredits);
};

const getVendorCredit = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id" });
  }
  const vendorCreditNote = await VendorCredit.findById(id)
    .populate("vendor")
    .populate("items");
  if (!vendorCreditNote) {
    return res.status(400).json({ error: "No such record" });
  }
  res.status(200).json(vendorCreditNote);
};

const createVendorCredit = async (req, res) => {
  const { creditNoteNo, date, vendor, items, amount } = req.body;
  const vendorCredit = await VendorCredit.create({
    creditNoteNo,
    date,
    vendor,
    items,
    amount,
  });
  res.status(201).json(vendorCredit);
};

module.exports = {
  getVendorCreditNotes,
  createVendorCredit,
  getVendorCredit,
};
