import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const SalesReturnDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [salesReturn, setSalesReturn] = useState({});

  useEffect(() => {
    axios.get(`/api/sales/sales-returns/${id}`).then((response) => {
      setSalesReturn(response.data);
      setLoading(false);
    });
  }, [id]);

  const approveReturn = () => {
    axios
      .post("/api/sales/sales-returns/approve", { id })
      .then(() => setSalesReturn({ ...salesReturn, status: "Approved" }));
  };

  if (loading) {
    return <div>Loading details...</div>;
  }

  return (
    <div className="container">
      <div className="row pt-3 align-items-center">
        <div className="col-6">
          <h1 className="display-6">Sales return details</h1>
        </div>
        {salesReturn.status === "Returned" && (
          <div className="col-6">
            <button onClick={approveReturn} className="btn bg-primary">
              Approve
            </button>
          </div>
        )}
      </div>

      <div className="my-2">
        <span className="h4 me-4">Sales order ref. no.:</span>
        <span>{salesReturn.salesOrder.refNo}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Order Date:</span>
        <span>
          {format(new Date(salesReturn.salesOrder.orderDate), "dd MMM yyyy")}
        </span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Customer Name:</span>
        <span>{salesReturn.salesOrder.customer.customerName}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Status:</span>
        <span>{salesReturn.status}</span>
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
            {salesReturn.salesOrder.items &&
              salesReturn.salesOrder.items.map((item, idx) => {
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
export default SalesReturnDetail;
