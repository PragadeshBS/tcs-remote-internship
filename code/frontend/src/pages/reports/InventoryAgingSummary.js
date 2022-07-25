import axios from "axios";
import { useEffect, useState } from "react";
import { subDays } from "date-fns";

const InventoryAgingSummary = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    axios.get("/api/inventory/items").then((res) => {
      let temp = { moreThan30: [], withinLast30: [], lastWeek: [] };
      res.data.forEach((item) => {
        if (subDays(new Date(), 30) > new Date(item.createdAt)) {
          temp.moreThan30.push(item);
        } else if (subDays(new Date(), 7) > new Date(item.createdAt)) {
          temp.withinLast30.push(item);
        } else {
          temp.lastWeek.push(item);
        }
      });
      setItems(temp);
    });
  }, []);
  return (
    <div className="mt-3">
      <h3>Inventory Aging Summary Report</h3>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">More than 30 days</th>
            {items.moreThan30 &&
              items.moreThan30.map((item, idx) => {
                return <td key={idx}>{item.name}</td>;
              })}
          </tr>

          <tr>
            <th scope="col">Within last 30 days</th>
            {items.withinLast30 &&
              items.withinLast30.map((item, idx) => {
                return <td key={idx}>{item.name}</td>;
              })}
          </tr>
          <tr>
            <th scope="col">Within last week</th>
            {items.lastWeek &&
              items.lastWeek.map((item, idx) => {
                return <td key={idx}>{item.name}</td>;
              })}
          </tr>
        </tbody>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
export default InventoryAgingSummary;
