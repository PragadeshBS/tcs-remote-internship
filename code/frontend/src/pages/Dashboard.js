import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Inventory</h2>
      <div>
        <Link to="/inventory/items">Item</Link>
      </div>
      <div>
        <Link to="/inventory/item-groups">Item Groups</Link>
      </div>
      <div>
        <Link to="/inventory/adjustments">Adjustments</Link>
      </div>
    </div>
  );
};
export default Dashboard;
