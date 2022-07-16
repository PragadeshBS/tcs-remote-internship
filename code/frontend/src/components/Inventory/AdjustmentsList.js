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
      <label className="form-label">Period to show adjustments: </label>
      <select
        className="form-select w-25"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      >
        <option value="365">Last year</option>
        <option value="30">Last 30 days</option>
        <option value="7">Last week</option>
        <option value="1">Today</option>
      </select>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Reference No.</th>
            <th scope="col">Mode</th>
          </tr>
        </thead>
        <tbody>
          {adjustments &&
            adjustments.map(
              (adj, idx) =>
                new Date(adj.date) >= showFrom && (
                  <tr key={adj._id}>
                    <td>{idx + 1}</td>
                    <td>{new Date(adj.date).toLocaleDateString()}</td>
                    <td>{adj.description}</td>
                    <td>{adj.refNo}</td>
                    <td>{adj.mode}</td>
                  </tr>
                )
            )}
        </tbody>
      </table>
    </div>
  );
};
export default AdjustmentsList;
