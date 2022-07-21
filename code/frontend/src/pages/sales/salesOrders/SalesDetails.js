import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const SalesDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [salesOrder, setSalesOrder] = useState({});

  // form input states
  useEffect(() => {
    const fetchSalesOrder = () => {
      axios.get(`/api/sales/salesorders/${id}`).then((response) => {
        setSalesOrder(response.data);
        setLoading(false);
      });
    };
    fetchSalesOrder();
  }, [id]);

  if (loading) {
    return <div>Loading details...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Sales Order</h1>

      <div className="my-2">
        <span className="h4 me-4">Ref. No.:</span>
        <span>{salesOrder.refNo}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Order Date:</span>
        <span>{format(new Date(salesOrder.orderDate), "dd MMM yyyy")}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Shipment Date:</span>
        <span>{format(new Date(salesOrder.shipmentDate), "dd MMM yyyy")}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Expected Delivery Date:</span>
        <span>
          {format(new Date(salesOrder.expectedDeliveryDate), "dd MMM yyyy")}
        </span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Customer Name:</span>
        <span>{salesOrder.customer.customerName}</span>
      </div>

      <div className="my-2">
        <h3 className="mt-3">Items in this order</h3>
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
            {salesOrder.items &&
              salesOrder.items.map((item, idx) => {
                return (
                  <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.sellingPrice}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SalesDetail;
