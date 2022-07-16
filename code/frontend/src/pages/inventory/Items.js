import ItemsList from "../../components/Inventory/ItemsList";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-8">
          <h1 className="display-3 px-2">Items</h1>
        </div>
        <div className="col-2"></div>
        <div className="col-2">
          <div className="p-3">
            <Link to="/inventory/items/add" className="btn bg-primary">
              Add a new item
            </Link>
          </div>
        </div>
      </div>
      <ItemsList />
    </div>
  );
};
export default Items;
