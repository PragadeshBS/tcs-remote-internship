import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

const PaymentList = () => {
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    axios.get("/api/sales/payments").then((response) => {
      setPayments(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading payments...</div>;
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Payment. no.</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Amount</th>
            <th scope="col">Payment Mode</th>
          </tr>
        </thead>
        <tbody>
          {payments &&
            payments.map((payment, idx) => {
              return (
                <tr key={payment._id}>
                  <td>{idx + 1}</td>
                  <td>{payment.paymentNo}</td>
                  <td>
                    {format(new Date(payment.paymentDate), "dd MMM yyyy")}
                  </td>
                  <td>{payment.customer.customerName}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.paymentMode}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default PaymentList;
