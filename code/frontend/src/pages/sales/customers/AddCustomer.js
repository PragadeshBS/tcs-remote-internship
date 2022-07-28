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
        setError("");
        setCustomer({});
      })
      .catch((error) => {
        console.log(error);
        setSuccess("");
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h1 className="display-6">Add a new customer</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Customer Name:</label>
          <input
            className="form-control w-75"
            required={true}
            value={customer.customerName || ""}
            onChange={(e) =>
              setCustomer({ ...customer, customerName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label my-2">Company:</label>
          <input
            className="form-control w-75"
            required={true}
            value={customer.company || ""}
            onChange={(e) =>
              setCustomer({ ...customer, company: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label my-2">Mobile:</label>
          <input
            className="form-control w-75"
            required={true}
            value={customer.mobile || ""}
            onChange={(e) =>
              setCustomer({ ...customer, mobile: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label my-2">Email:</label>
          <input
            className="form-control w-75"
            required={true}
            value={customer.email || ""}
            onChange={(e) =>
              setCustomer({ ...customer, email: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddCustomer;
