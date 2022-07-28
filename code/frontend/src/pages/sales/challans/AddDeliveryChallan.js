import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";

const AddDeliveryChallan = () => {
  // form states
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // sales order
  const [challan, setChallan] = useState({
    refNo: "",
    deliveryChallanDate: new Date(),
    customer: "",
    deliveryChallanType: "",
  });

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
      .post(`/api/sales/delivery-challans/`, {
        ...challan,
        items: selectedItems,
      })
      .then(() => {
        setSuccess("Delivery Challan added successfully");
        setError("");
        setChallan({
          refNo: "",
          deliveryChallanDate: new Date(),
          customer: "",
          deliveryChallanType: "",
        });
        setSelectedItems([]);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  if (loading) {
    return <div>Loading customer details...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Add a new Delivery Challan</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Ref. No.:</label>
          <input
            className="mb-3 form-control w-50"
            required={true}
            value={challan.refNo}
            onChange={(e) => setChallan({ ...challan, refNo: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Delivery Challan Date:</label>
          <DatePicker
            className="mb-3 w-50 d-block"
            required={true}
            value={challan.orderDate}
            onChange={(e) => setChallan({ ...challan, orderDate: e })}
          />
        </div>
        <div>
          <label className="form-label">Delivery Challan Type</label>
          <select
            className="form-select mb-3 w-50"
            value={challan.deliveryChallanType}
            required={true}
            onChange={(e) =>
              setChallan({ ...challan, deliveryChallanType: e.target.value })
            }
          >
            <option value="">Select a type</option>
            <option value="Job Work">Job Work</option>
            <option value="Supply on Approval">Supply on Approval</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <label className="form-label">Customer:</label>
          <select
            className="form-select w-50"
            value={challan.customer}
            onChange={(e) =>
              setChallan({ ...challan, customer: e.target.value })
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
              <div className="col-6">
                <select
                className="form-select"
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
              <div className="col-2">
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
export default AddDeliveryChallan;
