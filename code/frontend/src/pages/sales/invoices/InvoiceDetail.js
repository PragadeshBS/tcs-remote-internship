import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

const InvoiceDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState({});

  // form input states
  useEffect(() => {
    axios.get(`/api/sales/invoices/${id}`).then((response) => {
      setInvoice(response.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading details...</div>;
  }

  return (
    <div className="container">
      <h1 className="display-6">Invoice</h1>

      <div className="my-2">
        <span className="h4 me-4">Order. No.:</span>
        <span>{invoice.orderNo}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Date:</span>
        <span>{format(new Date(invoice.invoiceDate), "dd MMM yyyy")}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Customer Name:</span>
        <span>{invoice.customer.customerName}</span>
      </div>

      <div className="my-2">
        <span className="h4 me-4">Amount:</span>
        <span>{invoice.amount}</span>
      </div>

      <div className="my-2">
        <h3 className="mt-3">Items in this invoice</h3>
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
            {invoice.items &&
              invoice.items.map((item, idx) => {
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
export default InvoiceDetail;
