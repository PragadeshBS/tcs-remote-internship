import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useItemsContext } from "../../hooks/useItemsContext";
import DatePicker from "react-date-picker";

const AdjustmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const { items, dispatch } = useItemsContext();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [newVal, setNewVal] = useState("");

  useEffect(() => {
    const fetchItems = () => {
      axios.get("/api/inventory/items").then((response) => {
        dispatch({ type: "SET_ITEMS", payload: response.data });
        setLoading(false);
      });
    };
    fetchItems();
  }, [dispatch]);

  const addAdjustment = async (data) => {
    const postAdjustment = async () => {
      await axios
        .post("/api/inventory/adjustments", {
          ...data,
          date,
        })
        .then(() => {
          reset();
          setNewVal("");
          setDate(new Date());
          setSuccess("Adjustment made successfully");
          setError("");
        })
        .catch((err) => {
          setSuccess("");
          setError(err.message);
        });
    };

    if (data.mode === "quantity") {
      axios
        .patch(`/api/inventory/items/${data.item}`, {
          openingStock: newVal,
        })
        .then(() => postAdjustment());
    } else {
      axios
        .patch(`/api/inventory/items/${data.item}`, {
          sellingPrice: newVal,
        })
        .then(() => postAdjustment());
    }
  };

  if (loading) {
    return <div>Loading available items...</div>;
  }

  return (
    <div className="ps-5 mt-2">
      <h3 className="display-6">Make a New Adjustment</h3>
      <form onSubmit={handleSubmit(addAdjustment)}>
        <div className="my-3">
          <label className="form-label">Mode of adjustment</label>
          <select
            className="form-select w-75"
            {...register("mode", {
              required: "Mode of adjustment is required",
            })}
          >
            <option value="">Select a mode of adjustment</option>
            <option value="quantity">Quantity</option>
            <option value="value">Value</option>
          </select>
          {errors.mode && <span>{errors.mode.message}</span>}
        </div>
        <div className="my-3">
          <label className="form-label">New Value of quantity/value</label>
          <input
            className="form-control w-75"
            type="number"
            required={true}
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label className="form-label">Reference No.</label>
          <input
            className="form-control w-75"
            {...register("refNo", { required: "Reference No. is required" })}
          />
          {errors.refNo && <span>{errors.refNo.message}</span>}
        </div>
        <div className="my-3">
          <label className="form-label d-block">Date</label>
          <DatePicker
            className="w-25"
            format="dd - MM - yyyy"
            onChange={(dateVal) => {
              // add timezone offset
              setDate(
                new Date(
                  dateVal.getTime() - dateVal.getTimezoneOffset() * 60000
                )
              );
            }}
            value={date}
          />
        </div>
        <div className="my-3">
          <label className="form-label">Reason</label>
          <input
            className="form-control w-75"
            {...register("reason", { required: "Reason is required" })}
          />
          {errors.reason && <span>{errors.reason.message}</span>}
        </div>
        <div className="my-3">
          <label className="form-label">Description</label>
          <input
            className="form-control w-75"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <div className="my-3">
          <label className="form-label">Item</label>
          <select
            className="form-select w-75"
            {...register("item", { required: "Item is required" })}
          >
            <option value="">Select an item</option>
            {items &&
              items.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
          {errors.item && <span>{errors.item.message}</span>}
        </div>
        <div className="my-3">
          {success && (
            <div className="alert alert-success w-75 text-center">
              {success}
            </div>
          )}
          {error && (
            <div className="alert alert-danger w-75 text-center">{error}</div>
          )}
          <button type="submit" className="btn bg-primary">
            Make adjustment
          </button>
        </div>
      </form>
    </div>
  );
};
export default AdjustmentForm;
