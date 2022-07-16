import axios from "axios";
import { useEffect, useState } from "react";
import { useAdjustmentsContext } from "../../hooks/useAdjustmentsContext";
import { subDays } from "date-fns";

const AdjustmentsList = () => {
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const { adjustments, dispatch } = useAdjustmentsContext();
  const showFrom = subDays(new Date(), days);

  useEffect(() => {
    const fetchAdjustments = () => {
      axios.get("/api/inventory/adjustments").then((response) => {
        dispatch({ type: "SET_ADJUSTMENTS", payload: response.data });
        setLoading(false);
      });
    };
    fetchAdjustments();
  }, [dispatch]);

  if (loading) {
    return <div>Loading adjustments...</div>;
  }

  return (
    <div>
      <label>Period to show adjustments: </label>
      <select value={days} onChange={(e) => setDays(e.target.value)}>
        <option value="365">Last year</option>
        <option value="30">Last 30 days</option>
        <option value="7">Last week</option>
        <option value="1">Today</option>
      </select>
      <div>
        {adjustments &&
          adjustments.map(
            (adj) =>
              new Date(adj.date) >= showFrom && (
                <div key={adj._id}>{adj.refNo}</div>
              )
          )}
      </div>
    </div>
  );
};
export default AdjustmentsList;
