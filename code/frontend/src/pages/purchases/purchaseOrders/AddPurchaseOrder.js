import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";

const AddPurchaseOrder = () => {
  // form states
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // purchase order
  const [purchaseOrder, setPurchaseOrder] = useState({});

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
    axios
      .post(`/api/purchases/purchasesorders/`, {
        ...purchaseOrder,
        items: selectedItems,
      })
      .then(() => {
        setSuccess("Purchase Order added successfully");
        setError("");
        setPurchaseOrder({});
        setSelectedItems([]);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };

  if (loading) {
    return <div>Loading vendor details...</div>;
  }

  return (
    <div>
      <h1 className="display-6">Add a new Purchase order</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Ref. No.:</label>
          <input
            required={true}
            value={purchaseOrder.refNo || ""}
            onChange={(e) =>
              setPurchaseOrder({ ...purchaseOrder, refNo: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label">Order Date:</label>
          <DatePicker
            required={true}
            value={purchaseOrder.orderDate || ""}
            onChange={(e) =>
              setPurchaseOrder({ ...purchaseOrder, orderDate: e })
            }
          />
        </div>
        <div>
          <label className="form-label">Vendor:</label>
          <select
            value={purchaseOrder.vendor || ""}
            onChange={(e) =>
              setPurchaseOrder({ ...purchaseOrder, vendor: e.target.value })
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
          <h3>Items in this order</h3>
          <div>
            <div>
              <select
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
              <div
                className="btn btn-secondary mx-3"
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
          </div>
          <table className="table">
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
export default AddPurchaseOrder;
