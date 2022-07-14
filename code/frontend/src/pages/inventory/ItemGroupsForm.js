import { useState } from "react";
import { useItemGroupsContext } from "../../hooks/useItemGroupsContext";
import axios from "axios";

const ItemGroupsForm = () => {
  const { dispatch } = useItemGroupsContext();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemGroup = { name, description };

    axios.post("/api/inventory/item-groups", itemGroup).then((response) => {
      setName("");
      setDescription("");
      dispatch({ type: "CREATE_ITEM_GROUP", payload: response.data });
    });
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Item Group</h3>

      <label>Item Group Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button>Add Item Group</button>
    </form>
  );
};

export default ItemGroupsForm;
