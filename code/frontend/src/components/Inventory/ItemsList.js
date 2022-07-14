import { useEffect } from "react";
import { useItemsContext } from "../../hooks/useItemsContext";
import axios from "axios";

const ItemsList = () => {
  const { items, dispatch } = useItemsContext();
  useEffect(() => {
    const fetchItems = () => {
      axios.get("/api/inventory/items").then((response) => {
        dispatch({ type: "SET_ITEMS", payload: response.data });
      });
    };
    fetchItems();
  }, [dispatch]);

  return (
    <div>
      <h1>Items</h1>
      <div>
        {items &&
          items.map((item) => {
            return <div key={item._id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};
export default ItemsList;
