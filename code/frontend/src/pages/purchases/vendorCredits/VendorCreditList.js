import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const VendorCreditList = () => {
  const [loading, setLoading] = useState(true);
  const [vendorCredits, setVendorCredits] = useState({});
  useEffect(() => {
    axios.get("/api/purchases/vendor-credits").then((res) => {
      setVendorCredits(res.data);
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
            <th scope="col">Credit No.</th>
            <th scope="col">Date</th>
            <th scope="col">Vendor</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {vendorCredits &&
            vendorCredits.map((vendorCredit, idx) => {
              return (
                <tr key={vendorCredit._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link to={`/sales/credit-notes/${vendorCredit._id}`}>
                      {vendorCredit.creditNoteNo}
                    </Link>
                  </td>
                  <td>{format(new Date(vendorCredit.date), "dd MMM yyyy")}</td>
                  <td>{vendorCredit.vendor.vendorName}</td>
                  <td>{vendorCredit.amount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default VendorCreditList;
