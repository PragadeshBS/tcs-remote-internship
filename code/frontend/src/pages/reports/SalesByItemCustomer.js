import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

const SalesByItemCustomer = () => {
  const [loading, setLoading] = useState(true);
  const [salesOrders, setSalesOrders] = useState([]);
  const [items, setItems] = useState(null);
  const [curItem, setCurItem] = useState("*");
  const [customers, setCustomers] = useState([]);
  const [curCustomer, setCurCustomer] = useState("*");
  useEffect(() => {
    const fetchSalesOrders = () => {
      axios.get("/api/sales/salesorders").then((response) => {
        setSalesOrders(response.data);
        axios.get("/api/inventory/items").then((response) => {
          setItems(response.data);
          axios.get("/api/sales/customers").then((res) => {
            setCustomers(res.data);
            setLoading(false);
          });
        });
      });
    };
    fetchSalesOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>Sales by item / customer</h3>
      <div className="row mb-3">
        <div className="col-6">
          <label className="form-label">Select a customer</label>
          <select
            className="form-select w-25"
            value={curCustomer}
            onChange={(e) => setCurCustomer(e.target.value)}
          >
            <option value="*">All</option>
            {customers &&
              customers.map((customer) => {
                return (
                  <option key={customer._id} value={customer.customerName}>
                    {customer.customerName}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="col-6">
          Filter based on item
          <select
            className="form-select w-25"
            value={curItem}
            onChange={(e) => setCurItem(e.target.value)}
          >
            <option value="*">All</option>
            {items &&
              items.map((item) => (
                <option key={item._id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ref. no.</th>
            <th scope="col">Order Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Status</th>
            <th scope="col">Expected Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {salesOrders &&
            salesOrders.map((salesOrder, idx) => {
              if (
                (curCustomer === "*" ||
                  curCustomer === salesOrder.customer.customerName) &&
                (curItem === "*" ||
                  salesOrder.items.filter((item) => item.name === curItem)
                    .length > 0)
              ) {
                return (
                  <tr key={salesOrder._id}>
                    <td>{idx + 1}</td>
                    <td>{salesOrder.refNo}</td>
                    <td>
                      {format(new Date(salesOrder.orderDate), "dd MMM yyyy")}
                    </td>
                    <td>{salesOrder.customer.customerName}</td>
                    <td>{salesOrder.orderStatus}</td>
                    <td>
                      {format(
                        new Date(salesOrder.expectedDeliveryDate),
                        "dd MMM yyyy"
                      )}
                    </td>
                  </tr>
                );
              }
              return <tr key={idx}></tr>;
            })}
        </tbody>
      </table>
    </div>
  );
};
export default SalesByItemCustomer;
