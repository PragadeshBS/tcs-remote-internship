import { Link } from "react-router-dom";

const InventorySales = () => {
  return (
    <div className="row mt-3 align-items-center">
      <div className="col-1"></div>
      <div className="col-4">
        <div
          className="p-4 text-center rounded primary"
          style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        >
          <h2>Inventory</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/inventory/items" className="sidebar-links">
                Item
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/inventory/item-groups" className="sidebar-links">
                Item Groups
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/inventory/adjustments" className="sidebar-links">
                Adjustments
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-2"></div>
      <div className="col-4">
        <div
          className="p-4 text-center rounded primary"
          style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        >
          <h2>Sales</h2>
          <div className="row">
            <div className="col-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link className="sidebar-links" to="/sales/customers">
                    Customers
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="sidebar-links" to="/sales/salesorders">
                    Sales Orders
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="sidebar-links" to="/sales/packages">
                    Packages
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="sidebar-links" to="/sales/delivery-challans">
                    Delivery Challans
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link className="sidebar-links" to="/sales/invoices">
                    Invoices
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="sidebar-links" to="/sales/payments">
                    Payments
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="sidebar-links" to="/sales/sales-returns">
                    Sales Returns
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="sidebar-links" to="/sales/credit-notes">
                    Credit Notes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
};
export default InventorySales;
