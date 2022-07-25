import ItemGroupsList from "../../components/Inventory/ItemGroupsList";
import ItemGroupsForm from "../../components/Inventory/ItemGroupsForm";

const ItemGroups = () => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-5">
          <h1 className="display-3 px-2">Item Groups</h1>
          <ItemGroupsList />
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="p-3">
            <ItemGroupsForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemGroups;
