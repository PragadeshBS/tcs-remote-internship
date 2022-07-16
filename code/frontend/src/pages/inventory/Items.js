import ItemsList from "../../components/Inventory/ItemsList";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div>
      <h1 className="display-3">Items</h1>
      <ItemsList />
      <div>
        <Link to="/inventory/items/add">Add new item</Link>
      </div>
    </div>
  );
};
export default Items;
