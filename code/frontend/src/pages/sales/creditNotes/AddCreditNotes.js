import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";

const AddCreditNotes = () => {
  const [loading, setLoading] = useState(true);
  const [creditNote, setCreditNote] = useState({});
  const [invoices, setInvoices] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("/api/sales/invoices").then((res) => {
      setInvoices(res.data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/sales/credit-notes", creditNote)
      .then(() => {
        setSuccess("Credit note added successfully");
        setError("");
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };

  if (loading) {
    return <div>Loading invoices...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Add a new Credit Note</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Select a invoice order ref. no.</label>
          <select
            className="form-select w-50 mb-3"
            required={true}
            value={creditNote.invoiceNo}
            onChange={(e) =>
              setCreditNote({ ...creditNote, invoiceNo: e.target.value })
            }
          >
            <option value="">Select a invoice</option>
            {invoices &&
              invoices.map((invoice) => {
                return (
                  <option key={invoice._id} value={invoice._id}>
                    {invoice.orderNo}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <label className="form-label">Reason:</label>
          <input
            className="form-control w-50 mb-3"
            required={true}
            value={creditNote.reason || ""}
            onChange={(e) =>
              setCreditNote({ ...creditNote, reason: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label">Date:</label>
          <DatePicker
            className="d-block mb-3 w-50"
            required={true}
            value={creditNote.creditNoteDate || ""}
            onChange={(e) =>
              setCreditNote({ ...creditNote, creditNoteDate: e })
            }
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddCreditNotes;
