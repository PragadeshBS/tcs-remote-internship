import ItemGroupsList from "../../components/Inventory/ItemGroupsList";
import { Link } from "react-router-dom";
import ItemGroupsForm from "./ItemGroupsForm";

const ItemGroups = () => {
  return (
    <div>
      <ItemGroupsList />
      <ItemGroupsForm />
      <div>
        <Link to="/inventory/item-groups/add">Add new item group</Link>
      </div>
    </div>
  );
};
export default ItemGroups;
