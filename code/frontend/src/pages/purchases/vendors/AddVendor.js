import { useState } from "react";
import axios from "axios";

const AddVendor = () => {
  const [vendor, setVendor] = useState({});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/purchases/vendors/`, vendor)
      .then(() => {
        setSuccess("Vendor added successfully");
        setError("");
        setVendor({});
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };

  return (
    <div>
      <h1 className="display-6">Add a new vendor</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vendor Name:</label>
          <input
            required={true}
            value={vendor.vendorName || ""}
            onChange={(e) =>
              setVendor({ ...vendor, vendorName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            required={true}
            value={vendor.company || ""}
            onChange={(e) => setVendor({ ...vendor, company: e.target.value })}
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            required={true}
            value={vendor.mobile || ""}
            onChange={(e) => setVendor({ ...vendor, mobile: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            required={true}
            value={vendor.email || ""}
            onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            required={true}
            value={vendor.website || ""}
            onChange={(e) => setVendor({ ...vendor, website: e.target.value })}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddVendor;
