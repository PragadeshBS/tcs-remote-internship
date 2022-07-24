import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const PackageDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pkg, setPkg] = useState({});

  // form input states
  useEffect(() => {
    const fetchPkg = () => {
      axios.get(`/api/sales/packages/${id}`).then((response) => {
        setPkg(response.data);
        setLoading(false);
      });
    };
    fetchPkg();
  }, [id]);

  if (loading) {
    return <div>Loading details...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Package details</h1>

      <div className="my-2">
        <span className="h4 me-4">Package. No.:</span>
        <span>{pkg.packageNo}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Sales order ref. no.:</span>
        <span>{pkg.salesOrder.refNo}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Order Date:</span>
        <span>{format(new Date(pkg.salesOrder.orderDate), "dd MMM yyyy")}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Shipment Date:</span>
        <span>
          {format(new Date(pkg.salesOrder.shipmentDate), "dd MMM yyyy")}
        </span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Expected Delivery Date:</span>
        <span>
          {format(new Date(pkg.salesOrder.expectedDeliveryDate), "dd MMM yyyy")}
        </span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Customer Name:</span>
        <span>{pkg.salesOrder.customer.customerName}</span>
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
            {pkg.salesOrder.items &&
              pkg.salesOrder.items.map((item, idx) => {
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
export default PackageDetail;
