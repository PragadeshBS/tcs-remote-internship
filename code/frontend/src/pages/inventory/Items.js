import ItemsList from "../../components/Inventory/ItemsList";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div>
      <ItemsList />
      <div>
        <Link to="/inventory/items/add">Add new item</Link>
      </div>
    </div>
  );
};
export default Items;
