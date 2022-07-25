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
    <div className="item-group-form p-5 rounded my-5">
      <form onSubmit={handleSubmit}>
        <h3 className="display-6">Add a New Item Group</h3>
        <div className="my-3">
          <label className="form-label">Item Group Name:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="my-3">
          <label className="form-label">Description:</label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <button className="btn bg-primary">Add Item Group</button>
        </div>
      </form>
    </div>
  );
};

export default ItemGroupsForm;
