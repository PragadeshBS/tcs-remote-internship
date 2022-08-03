import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditVendor = () => {
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/purchases/vendors/${id}`)
      .then((response) => {
        setVendor(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/purchases/vendors/${id}`, vendor)
      .then(() => {
        navigate("/purchases/vendors");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  if (loading) {
    return <div>Loading vendor info...</div>;
  }

  if (!vendor) {
    return <div>No such vendor</div>;
  }

  return (
    <div>
      <h1 className="display-6">Update vendor details</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Vendor Name:</label>
          <input
            className="form-control w-75"
            required={true}
            value={vendor.vendorName}
            onChange={(e) =>
              setVendor({ ...vendor, vendorName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="form-label">Company:</label>
          <input
            className="form-control w-75"
            required={true}
            value={vendor.company}
            onChange={(e) => setVendor({ ...vendor, company: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Mobile:</label>
          <input
            className="form-control w-75"
            required={true}
            value={vendor.mobile}
            onChange={(e) => setVendor({ ...vendor, mobile: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Email:</label>
          <input
            className="form-control w-75"
            required={true}
            value={vendor.email}
            onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Website:</label>
          <input
            className="form-control w-75"
            required={true}
            value={vendor.website}
            onChange={(e) => setVendor({ ...vendor, website: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Update
        </button>
      </form>
    </div>
  );
};
export default EditVendor;
