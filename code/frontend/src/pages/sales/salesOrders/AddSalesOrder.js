import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";

const AddSalesOrder = () => {
  // form states
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // sales order
  const [salesOrder, setSalesOrder] = useState({});

  // form input states
  const [customers, setCustomers] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [curItem, setCurItem] = useState("");

  useEffect(() => {
    const fetchCustomers = () => {
      axios.get("/api/sales/customers").then((response) => {
        setCustomers(response.data);
        axios.get("/api/inventory/items").then((itemsRes) => {
          setItems(itemsRes.data);
          setLoading(false);
        });
      });
    };
    fetchCustomers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedItems.length === 0) {
      setError("Select atleast one item");
      return;
    }
    axios
      .post(`/api/sales/salesorders/`, { ...salesOrder, items: selectedItems })
      .then(() => {
        setSuccess("Sales Order added successfully");
        setError("");
        setSalesOrder({});
        setSelectedItems([]);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };

  if (loading) {
    return <div>Loading customer details...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Add a new Sales order</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Ref. No.:</label>
          <input
            className="form-control w-75 my-2"
            required={true}
            value={salesOrder.refNo || ""}
            onChange={(e) =>
              setSalesOrder({ ...salesOrder, refNo: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label d-block mt-3">Order Date:</label>
          <DatePicker
            className="w-50"
            required={true}
            value={salesOrder.orderDate || ""}
            onChange={(e) => setSalesOrder({ ...salesOrder, orderDate: e })}
          />
        </div>
        <div>
          <label className="form-label d-block mt-3">Shipment Date:</label>
          <DatePicker
            className="w-50"
            required={true}
            value={salesOrder.shipmentDate || ""}
            onChange={(e) => setSalesOrder({ ...salesOrder, shipmentDate: e })}
          />
        </div>
        <div>
          <label className="form-label d-block mt-3">Expected Delivery Date:</label>
          <DatePicker
            className="w-50 mb-3"
            required={true}
            value={salesOrder.expectedDeliveryDate || ""}
            onChange={(e) =>
              setSalesOrder({ ...salesOrder, expectedDeliveryDate: e })
            }
          />
        </div>
        <div>
          <label className="form-label">Customer:</label>
          <select
            className="form-select w-75 mb-2"
            value={salesOrder.customer || ""}
            onChange={(e) =>
              setSalesOrder({ ...salesOrder, customer: e.target.value })
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
          <h3 className="mt-3">Items in this order</h3>
          <div>
            <div className="row">
              <div className="col-7">
                <select
                  value={curItem}
                  className="form-select w-50 my-2"
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
              <div className="col-2">
                <span
                  className="mx-3 btn btn-secondary"
                  onClick={() => {
                    if (curItem) {
                      setSelectedItems([...selectedItems, curItem]);
                      setCurItem("");
                    }
                  }}
                >
                  Add Item
                </span>
              </div>
              <div className="col-3"></div>
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
        <button type="submit" className="btn btn-success">Add sales order</button>
      </form>
    </div>
  );
};
export default AddSalesOrder;
