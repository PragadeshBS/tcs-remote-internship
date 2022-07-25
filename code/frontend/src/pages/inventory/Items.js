import ItemsList from "../../components/Inventory/ItemsList";
import TitleSection from "../../components/TitleSection";

const Items = () => {
  return (
    <div>
      <TitleSection
        title="Items"
        buttonText="New Item"
        formLink="/inventory/items/add"
      />
      <ItemsList />
    </div>
  );
};
export default Items;
