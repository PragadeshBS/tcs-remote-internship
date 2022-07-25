import { useEffect, useState } from "react";
import { format, subDays } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios";

const PurchaseOrdersList = () => {
  const [loading, setLoading] = useState(true);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [days, setDays] = useState(30);
  const [items, setItems] = useState(null);
  const [vendors, setVendors] = useState(null);
  const [curVendor, setCurVendor] = useState("*");
  const [curItem, setCurItem] = useState("*");
  const showFrom = subDays(new Date(), days);
  useEffect(() => {
    axios.get("/api/purchases/purchasesorders").then((response) => {
      setPurchaseOrders(response.data);
      axios.get("/api/inventory/items").then((response) => {
        setItems(response.data);
        axios.get("/api/purchases/vendors").then((res) => {
          setVendors(res.data);
          setLoading(false);
        });
      });
    });
  }, []);

  if (loading) {
    return <div>Loading adjustments...</div>;
  }
  return (
    <div>
      <div className="row mb-3">
        <div className="col-6">
          Filter based on vendor
          <select
            className="form-select w-25"
            value={curVendor}
            onChange={(e) => setCurVendor(e.target.value)}
          >
            <option value="*">All</option>
            {vendors &&
              vendors.map((vendor) => (
                <option key={vendor._id} value={vendor.vendorName}>
                  {vendor.vendorName}
                </option>
              ))}
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
          </tr>
        </thead>
        <tbody>
          {purchaseOrders &&
            purchaseOrders.map((purchaseOrder, idx) => {
              if (
                (curItem === "*" ||
                  purchaseOrder.items.filter((item) => item.name === curItem)
                    .length > 0) &&
                (curVendor === "*" ||
                  purchaseOrder.vendor.vendorName === curVendor)
              ) {
                return (
                  <tr key={purchaseOrder._id}>
                    <td>{idx + 1}</td>
                    <td>
                      <Link
                        to={`/purchases/purchase-orders/${purchaseOrder._id}`}
                      >
                        {purchaseOrder.refNo}
                      </Link>
                    </td>
                    <td>
                      {format(new Date(purchaseOrder.orderDate), "dd MMM yyyy")}
                    </td>
                    <td>{purchaseOrder.vendor.vendorName}</td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </div>
  );
};
export default PurchaseOrdersList;
