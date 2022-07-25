import { Link } from "react-router-dom";

const Purchases = () => {
  return (
    <div
      className="p-4 text-center rounded primary w-50 mx-auto m-3 mt-5"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className="w-75 mx-auto">
        <h2>Purchases</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to="/purchases/vendors" className="sidebar-links">
              Vendors
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/purchases/purchase-orders" className="sidebar-links">
              Purchase Orders
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/purchases/bills" className="sidebar-links">
              Bills &amp; Payments
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/purchases/vendor-credits" className="sidebar-links">
              Vendor Credits
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Purchases;
