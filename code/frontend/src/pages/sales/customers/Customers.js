import { Link } from "react-router-dom";
import CustomersList from "../../../components/sales/CustomersList";

const Customers = () => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-8">
          <h1 className="display-3 px-2">Customers</h1>
        </div>
        <div className="col-2"></div>
        <div className="col-2">
          <div className="p-3">
            <Link to="/sales/customers/add" className="btn bg-primary">
              New customer
            </Link>
          </div>
        </div>
      </div>
      <CustomersList />
    </div>
  );
};
export default Customers;
