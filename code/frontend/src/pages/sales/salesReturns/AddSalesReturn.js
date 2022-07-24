import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";

const AddSalesReturn = () => {
  const [loading, setLoading] = useState(true);
  const [salesReturn, setSalesReturn] = useState({});
  const [salesOrders, setSalesOrders] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("/api/sales/salesorders").then((res) => {
      setSalesOrders(res.data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/sales/sales-returns", salesReturn)
      .then(() => {
        setSuccess("Sales return added successfully");
        setError("");
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };

  if (loading) {
    return <div>Loading sales orders...</div>;
  }

  return (
    <div>
      <h1 className="display-6">Add a new Sales return</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select a sales order ref. no.</label>
          <select
            required={true}
            value={salesReturn.salesOrder}
            onChange={(e) =>
              setSalesReturn({ ...salesReturn, salesOrder: e.target.value })
            }
          >
            <option value="">Select a sales order</option>
            {salesOrders &&
              salesOrders.map((salesOrder) => {
                return (
                  <option key={salesOrder._id} value={salesOrder._id}>
                    {salesOrder.refNo}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <DatePicker
            required={true}
            value={salesReturn.date || ""}
            onChange={(e) => setSalesReturn({ ...salesReturn, date: e })}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddSalesReturn;
