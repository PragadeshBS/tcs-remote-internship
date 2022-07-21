import { Link } from "react-router-dom";
import SalesOrderList from "../../../components/sales/SalesOrderList";

const SalesOrders = () => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-8">
          <h1 className="display-3 px-2">Sales Orders</h1>
        </div>
        <div className="col-2"></div>
        <div className="col-2">
          <div className="p-3">
            <Link to="/sales/salesorders/add" className="btn bg-primary">
              New order
            </Link>
          </div>
        </div>
      </div>
      <SalesOrderList />
    </div>
  );
};
export default SalesOrders;
