import AdjustmentsList from "../../components/Inventory/AdjustmentsList";
import { Link } from "react-router-dom";

const Adjustments = () => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-8">
          <h1 className="display-3 px-2">Adjustments</h1>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <div className="p-3">
            <Link to="/inventory/adjustments/add" className="btn bg-primary">
              New adjustment
            </Link>
          </div>
        </div>
      </div>
      <AdjustmentsList />
    </div>
  );
};
export default Adjustments;
