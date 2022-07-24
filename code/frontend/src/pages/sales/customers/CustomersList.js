import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchCustomers = () => {
      axios.get("/api/sales/customers").then((response) => {
        setCustomers(response.data);
      });
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <p className="small text-secondary ps-3">
        Click on a customers name to edit their details
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer name</th>
            <th scope="col">Company</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer, idx) => {
              return (
                <tr key={customer._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link className="normal-link" to={`/sales/customers/edit/${customer._id}`}>
                      {customer.customerName}
                    </Link>
                  </td>
                  <td>{customer.company}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default CustomersList;
