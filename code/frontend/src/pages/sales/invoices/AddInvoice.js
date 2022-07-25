import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";

const AddInvoice = () => {
  // form states
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // sales order
  const [invoice, setInvoice] = useState({});

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
    let amount = 0;
    for (let i = 0; i < selectedItems.length; i++) {
      amount += items.find(
        (item) => item._id === selectedItems[i]
      ).sellingPrice;
    }
    axios
      .post(`/api/sales/invoices/`, {
        ...invoice,
        items: selectedItems,
        amount,
      })
      .then(() => {
        setSuccess("Invoice added successfully");
        setError("");
        setInvoice({});
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
    <div>
      <h1 className="display-6">Add a new Invoice</h1>
      {error && <div className="alert alert-danger w-50">{error}</div>}
      {success && <div className="alert alert-success w-50">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Order. No.:</label>
          <input
            required={true}
            value={invoice.orderNo || ""}
            onChange={(e) =>
              setInvoice({ ...invoice, orderNo: e.target.value })
            }
          />
        </div>
        <div>
          <label>Invoice Date:</label>
          <DatePicker
            required={true}
            value={invoice.invoiceDate || ""}
            onChange={(e) => setInvoice({ ...invoice, invoiceDate: e })}
          />
        </div>
        <div>
          <label>Customer:</label>
          <select
            value={invoice.customer || ""}
            onChange={(e) =>
              setInvoice({ ...invoice, customer: e.target.value })
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddInvoice;
