import AdjustmentsList from "../../components/Inventory/AdjustmentsList";
import { Link } from "react-router-dom";

const Adjustments = () => {
  return (
    <div>
      <h1>Adjustments</h1>
      <AdjustmentsList />
      <Link to="/inventory/adjustments/add">Make a new adjustment</Link>
    </div>
  );
};
export default Adjustments;
