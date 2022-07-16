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
      <h3>Available Items</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item name</th>
              <th scope="col">Item Group</th>
              <th scope="col">Selling Price</th>
              <th scope="col">Available Stock</th>
              <th scope="col">Reorder Point</th>
            </tr>
          </thead>
          {items &&
            items.map((item, idx) => {
              return (
                <tr key={item._id}>
                  <td>{idx+1}</td>
                  <td>{item.name}</td>
                  <td>{item.itemGroup}</td>
                  <td>₹ {item.sellingPrice}</td>
                  <td>{item.openingStock}</td>
                  <td>{item.reorderPoint}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};
export default ItemsList;
