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
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {itemGroups &&
              itemGroups.map((itemGroup, idx) => {
                return (
                  <tr key={itemGroup._id}>
                    <td>{idx + 1}</td>
                    <td>{itemGroup.name}</td>
                    <td>{itemGroup.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ItemGroupsList;
