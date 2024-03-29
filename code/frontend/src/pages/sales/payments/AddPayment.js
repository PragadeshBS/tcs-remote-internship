import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";

const AddPayment = () => {
  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState({});
  const [customers, setCustomers] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("/api/sales/customers").then((res) => {
      setCustomers(res.data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/sales/payments", payment)
      .then(() => {
        setSuccess("Payment added successfully");
        setError("");
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };

  if (loading) {
    return <div>Loading customers...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Add a new Payment</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Payment. No.:</label>
          <input
            className="form-control w-50 mb-3"
            required={true}
            value={payment.paymentNo || ""}
            onChange={(e) =>
              setPayment({ ...payment, paymentNo: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label">Payment Date:</label>
          <DatePicker
            className="w-50 d-block mb-3"
            required={true}
            value={payment.paymentDate || ""}
            onChange={(e) => setPayment({ ...payment, paymentDate: e })}
          />
        </div>
        <div>
          <label className="form-label">Payment Mode</label>
          <select
            className="form-select w-50 mb-3"
            value={payment.paymentMode || ""}
            required={true}
            onChange={(e) =>
              setPayment({ ...payment, paymentMode: e.target.value })
            }
          >
            <option value="">Select a mode</option>
            <option value="Card">Card</option>
            <option value="Net banking">Net banking</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
          </select>
        </div>
        <div>
          <label className="form-label">Customer:</label>
          <select
            className="form-select w-50 mb-3"
            value={payment.customer || ""}
            onChange={(e) =>
              setPayment({ ...payment, customer: e.target.value })
            }
            required={true}
          >
            <option value="">Select a customer</option>
            {customers &&
              customers.map((customer) => (
                <option key={customer._id} value={customer._id}>
                  {customer.customerName}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="form-label">Amount:</label>
          <input
            className="form-control w-50"
            type="number"
            required={true}
            value={payment.amount || ""}
            onChange={(e) => setPayment({ ...payment, amount: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddPayment;
