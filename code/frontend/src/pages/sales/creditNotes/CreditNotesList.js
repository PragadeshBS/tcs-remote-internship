import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const CreditNotesList = () => {
  const [loading, setLoading] = useState(true);
  const [creditNotes, setCreditNotes] = useState({});
  useEffect(() => {
    axios.get("/api/sales/credit-notes").then((res) => {
      setCreditNotes(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Invoice No.</th>
            <th scope="col">Date</th>
            <th scope="col">Reason</th>
            <th scope="col">Customer</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {creditNotes &&
            creditNotes.map((creditNote, idx) => {
              return (
                <tr key={creditNote._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link to={`/sales/credit-notes/${creditNote._id}`}>
                      {creditNote.invoiceNo.orderNo}
                    </Link>
                  </td>
                  <td>
                    {format(new Date(creditNote.creditNoteDate), "dd MMM yyyy")}
                  </td>
                  <td>{creditNote.reason}</td>
                  <td>{creditNote.invoiceNo.customer.customerName}</td>
                  <td>{creditNote.invoiceNo.amount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default CreditNotesList;
