import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const PurchaseDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [purchaseOrder, setPurchaseOrder] = useState({});

  // form input states
  useEffect(() => {
    axios.get(`/api/purchases/purchasesorders/${id}`).then((response) => {
      setPurchaseOrder(response.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading details...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Purchase Order</h1>

      <div className="my-2">
        <span className="h4 me-4">Ref. No.:</span>
        <span>{purchaseOrder.refNo}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Order Date:</span>
        <span>{format(new Date(purchaseOrder.orderDate), "dd MMM yyyy")}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Vendor Name:</span>
        <span>{purchaseOrder.vendor.vendorName}</span>
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
            {purchaseOrder.items &&
              purchaseOrder.items.map((item, idx) => {
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
export default PurchaseDetail;
