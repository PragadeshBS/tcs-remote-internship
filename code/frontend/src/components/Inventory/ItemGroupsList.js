import { useEffect } from "react";
import { useItemGroupsContext } from "../../hooks/useItemGroupsContext";
import axios from "axios";

const ItemGroupsList = () => {
  const { itemGroups, dispatch } = useItemGroupsContext();
  useEffect(() => {
    const fetchItemGroups = () => {
      axios.get("/api/inventory/item-groups").then((response) => {
        dispatch({ type: "SET_ITEM_GROUPS", payload: response.data });
      });
    };
    fetchItemGroups();
  }, [dispatch]);

  return (
    <div>
      <h1>Item groups</h1>
      <div>
        {itemGroups &&
          itemGroups.map((itemGroup) => {
            return <div key={itemGroup._id}>{itemGroup.name}</div>;
          })}
      </div>
    </div>
  );
};
export default ItemGroupsList;
