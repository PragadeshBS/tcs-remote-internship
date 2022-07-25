import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VendorsList = () => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    axios.get("/api/purchases/vendors").then((response) => {
      setVendors(response.data);
    });
  }, []);

  return (
    <div>
      <p className="small text-secondary ps-3">
        Click on a vendor's name to edit their details
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Vendor name</th>
            <th scope="col">Company</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {vendors &&
            vendors.map((vendor, idx) => {
              return (
                <tr key={vendor._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link
                      className="normal-link"
                      to={`/purchases/vendors/edit/${vendor._id}`}
                    >
                      {vendor.vendorName}
                    </Link>
                  </td>
                  <td>{vendor.company}</td>
                  <td>{vendor.mobile}</td>
                  <td>{vendor.email}</td>
                  <td>{vendor.website}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default VendorsList;
