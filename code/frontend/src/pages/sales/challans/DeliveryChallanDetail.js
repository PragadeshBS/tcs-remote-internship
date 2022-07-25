import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

const DeliveryChallanDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [challan, setChallan] = useState({});

  // form input states
  useEffect(() => {
    const fetchChallan = () => {
      axios.get(`/api/sales/delivery-challans/${id}`).then((response) => {
        setChallan(response.data);
        setLoading(false);
      });
    };
    fetchChallan();
  }, [id]);

  if (loading) {
    return <div>Loading details...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Delivery Challan</h1>

      <div className="my-2">
        <span className="h4 me-4">Ref. No.:</span>
        <span>{challan.refNo}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Date:</span>
        <span>
          {format(new Date(challan.deliveryChallanDate), "dd MMM yyyy")}
        </span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Customer Name:</span>
        <span>{challan.customer.customerName}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Type:</span>
        <span>{challan.deliveryChallanType}</span>
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
            {challan.items &&
              challan.items.map((item, idx) => {
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
export default DeliveryChallanDetail;
