import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div className="card w-50 mx-auto">
      <div className="card-header">Reports</div>
      <div className="card-body">
        <p className="card-text">
          View inventory summary report, inventory aging summary report, product
          sales report and sales by Items/Customer
        </p>
        <Link to="/reports" className="btn btn-primary d-block mx-auto">
          View Reports
        </Link>
      </div>
    </div>
  );
};
export default Reports;
