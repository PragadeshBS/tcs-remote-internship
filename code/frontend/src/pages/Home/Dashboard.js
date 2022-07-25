import InventorySales from "./InventorySales";
import Purchases from "./Purchases";
import Reports from "./Reports";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="display-3">Dashboard</h1>
      <Reports />
      <InventorySales />
      <Purchases />
    </div>
  );
};
export default Dashboard;
