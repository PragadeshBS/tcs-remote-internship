import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";

const AddVendorCredit = () => {
  // form states
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // sales order
  const [vendorCredit, setVendorCredit] = useState({
    creditNoteNo: "",
    date: new Date(),
    vendor: "",
  });

  // form input states
  const [vendors, setVendors] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [curItem, setCurItem] = useState("");

  useEffect(() => {
    axios.get("/api/purchases/vendors").then((response) => {
      setVendors(response.data);
      axios.get("/api/inventory/items").then((itemsRes) => {
        setItems(itemsRes.data);
        setLoading(false);
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedItems.length === 0) {
      setError("Select atleast one item");
      return;
    }
    let amount = 0;
    for (let i = 0; i < selectedItems.length; i++) {
      amount += items.find(
        (item) => item._id === selectedItems[i]
      ).sellingPrice;
    }
    axios
      .post(`/api/purchases/vendor-credits/`, {
        ...vendorCredit,
        items: selectedItems,
        amount,
      })
      .then(() => {
        setSuccess("Vendor Credit added successfully");
        setError("");
        setVendorCredit({
          creditNoteNo: "",
          date: new Date(),
          vendor: "",
        });
        setSelectedItems([]);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  if (loading) {
    return <div>Loading vendor details...</div>;
  }

  return (
    <div>
      <h1 className="display-6">Add a new Vendor Credit</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Credit note no.:</label>
          <input
            className="form-control w-75"
            required={true}
            value={vendorCredit.creditNoteNo}
            onChange={(e) =>
              setVendorCredit({ ...vendorCredit, creditNoteNo: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label">Date:</label>
          <DatePicker
            className="d-block w-75"
            required={true}
            value={vendorCredit.date}
            onChange={(e) => setVendorCredit({ ...vendorCredit, date: e })}
          />
        </div>
        <div>
          <label className="form-label">Vendor:</label>
          <select
            className="form-select w-75"
            value={vendorCredit.vendor}
            onChange={(e) =>
              setVendorCredit({ ...vendorCredit, vendor: e.target.value })
            }
            required={true}
          >
            <option value="">Select a vendor</option>
            {vendors &&
              vendors.map((vendor) => (
                <option key={vendor._id} value={vendor._id}>
                  {vendor.vendorName}
                </option>
              ))}
          </select>
        </div>
        <div>
          <h2 className="mt-3">Items in this credit</h2>
          <div className="row">
            <div className="col-8">
              <select
                className="form-select w-75"
                value={curItem}
                onChange={(e) => setCurItem(e.target.value)}
              >
                <option value="">Choose an item to add</option>
                {items &&
                  items.map((item) => {
                    if (!selectedItems.includes(item._id)) {
                      return (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      );
                    }
                  })}
              </select>
            </div>
            <div
              className="col-1 btn btn-secondary mx-3"
              onClick={() => {
                if (curItem) {
                  setSelectedItems([...selectedItems, curItem]);
                  setCurItem("");
                }
              }}
            >
              Add Item
            </div>
          </div>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems &&
                selectedItems.map((item, idx) => {
                  const thisItem = items.find((i) => i._id === item);
                  return (
                    <tr key={item}>
                      <td>{idx + 1}</td>
                      <td>{thisItem.name}</td>
                      <td>{thisItem.brand}</td>
                      <td>{thisItem.sellingPrice}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddVendorCredit;
