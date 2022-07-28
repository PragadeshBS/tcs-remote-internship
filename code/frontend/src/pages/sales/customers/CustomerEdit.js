import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CustomerEdit = () => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/sales/customers/${id}`)
      .then((response) => {
        setCustomer(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/sales/customers/${id}`, customer)
      .then(() => {
        navigate("/sales/customers");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  if (loading) {
    return <div>Loading customer info...</div>;
  }

  if (!customer) {
    return <div>No such customer</div>;
  }

  return (
    <div>
      <h1 className="display-6">Update customer details</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Customer Name:</label>
          <input
            required={true}
            value={customer.customerName}
            onChange={(e) =>
              setCustomer({ ...customer, customerName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label">Company:</label>
          <input
            required={true}
            value={customer.company}
            onChange={(e) =>
              setCustomer({ ...customer, company: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label">Mobile:</label>
          <input
            required={true}
            value={customer.mobile}
            onChange={(e) =>
              setCustomer({ ...customer, mobile: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label">Email:</label>
          <input
            required={true}
            value={customer.email}
            onChange={(e) =>
              setCustomer({ ...customer, email: e.target.value })
            }
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default CustomerEdit;
