import axios from "axios";
import { useEffect, useState } from "react";

const AddPackage = () => {
  const [loading, setLoading] = useState(true);
  const [pkg, setPkg] = useState({});
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
      .post("/api/sales/packages", pkg)
      .then(() => {
        setSuccess("Package added successfully");
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
      <h1 className="display-6">Add a new Package</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Package No.:</label>
          <input
            required={true}
            value={pkg.packageNo || ""}
            onChange={(e) => setPkg({ ...pkg, packageNo: e.target.value })}
          />
        </div>
        <div>
          <label>Select a sales order ref. no.</label>
          <select
            required={true}
            value={pkg.salesOrder}
            onChange={(e) => setPkg({ ...pkg, salesOrder: e.target.value })}
          >
            <option value="">Select a sales order</option>
            {salesOrders &&
              salesOrders.map((salesOrder) => {
                if (salesOrder.orderStatus === "Order Placed") {
                  return (
                    <option key={salesOrder._id} value={salesOrder._id}>
                      {salesOrder.refNo}
                    </option>
                  );
                }
              })}
          </select>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddPackage;
