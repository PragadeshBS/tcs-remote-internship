import { useEffect, useState } from "react";
import { useItemGroupsContext } from "../../hooks/useItemGroupsContext";
import axios from "axios";
import { useForm } from "react-hook-form";

const ItemForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(true);
  const { itemGroups, dispatch } = useItemGroupsContext();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    const fetchItemGroups = () => {
      axios.get("/api/inventory/item-groups").then((response) => {
        dispatch({ type: "SET_ITEM_GROUPS", payload: response.data });
        setLoading(false);
      });
    };
    fetchItemGroups();
  }, [dispatch]);
  const addItem = (data) => {
    axios
      .post("/api/inventory/items", data)
      .then(() => {
        reset();
        setError("");
        setSuccess("Item was added successfully");
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
      <form onSubmit={handleSubmit(addItem)}>
        <div>
          <label>Item name</label>
          <input {...register("name", { required: "Item name is required" })} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Unit</label>
          <input {...register("unit", { required: "Unit is required" })} />
          {errors.unit && <span>{errors.unit.message}</span>}
        </div>
        <div>
          <label>Dimensions</label>
          <input
            {...register("dimensions", { required: "Dimensions are required" })}
          />
          {errors.dimensions && <span>{errors.dimensions.message}</span>}
        </div>
        <div>
          <label>Weight</label>
          <input
            type="number"
            {...register("weight", { required: "Weight is required" })}
          />
          {errors.weight && <span>{errors.weight.message}</span>}
        </div>
        <div>
          <label>Manufacturer</label>
          <input
            {...register("manufacturer", {
              required: "Manufacturer is required",
            })}
          />
          {errors.manufacturer && <span>{errors.manufacturer.message}</span>}
        </div>
        <div>
          <label>Brand</label>
          <input
            {...register("brand", {
              required: "Brand is required",
            })}
          />
          {errors.brand && <span>{errors.brand.message}</span>}
        </div>
        <div>
          <label>Selling Price</label>
          <input
            type="number"
            {...register("sellingPrice", {
              required: "Selling Price is required",
            })}
          />
          {errors.sellingPrice && <span>{errors.sellingPrice.message}</span>}
        </div>
        <div>
          <label>Cost Price</label>
          <input
            type="number"
            {...register("costPrice", {
              required: "Cost Price is required",
            })}
          />
          {errors.costPrice && <span>{errors.costPrice.message}</span>}
        </div>
        <div>
          <label>Description</label>
          <input
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <div>
          <label>Opening Stock</label>
          <input
            type="number"
            {...register("openingStock", {
              required: "Opening Stock is required",
            })}
          />
          {errors.openingStock && <span>{errors.openingStock.message}</span>}
        </div>
        <div>
          <label>Reorder Point</label>
          <input
            type="number"
            {...register("reorderPoint", {
              required: "Reorder Point is required",
            })}
          />
          {errors.reorderPoint && <span>{errors.reorderPoint.message}</span>}
        </div>
        <div>
          <label>Preferred Vendor</label>
          <input
            {...register("preferredVendor", {
              required: "Preferred Vendor is required",
            })}
          />
          {errors.preferredVendor && (
            <span>{errors.preferredVendor.message}</span>
          )}
        </div>
        <div>
          <label>Item Group</label>
          <select
            {...register("itemGroup", { required: "Item Group is required" })}
          >
            <option value="">Select an item group</option>
            {itemGroups &&
              itemGroups.map((itemGrp) => {
                return (
                  <option key={itemGrp._id} value={itemGrp._id}>
                    {itemGrp.name}
                  </option>
                );
              })}
          </select>
          {errors.itemGroup && <span>{errors.itemGroup.message}</span>}
        </div>
        <button type="submit">Add item</button>
      </form>
    </div>
  );
};
export default ItemForm;
