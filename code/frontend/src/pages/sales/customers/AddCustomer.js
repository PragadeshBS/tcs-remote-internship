import { useState } from "react";
import axios from "axios";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/sales/customers/`, customer)
      .then(() => {
        setSuccess("Customer added successfully");
        setCustomer({});
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h1 className="display-6">Add a new customer</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Name:</label>
          <input
            required={true}
            value={customer.customerName || ""}
            onChange={(e) =>
              setCustomer({ ...customer, customerName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            required={true}
            value={customer.company || ""}
            onChange={(e) =>
              setCustomer({ ...customer, company: e.target.value })
            }
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            required={true}
            value={customer.mobile || ""}
            onChange={(e) =>
              setCustomer({ ...customer, mobile: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            required={true}
            value={customer.email || ""}
            onChange={(e) =>
              setCustomer({ ...customer, email: e.target.value })
            }
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddCustomer;
