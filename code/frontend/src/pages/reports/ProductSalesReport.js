import axios from "axios";
import { useEffect, useState } from "react";

const ProductSalesReport = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    let items = {};
    axios.get("/api/inventory/items").then((res) => {
      res.data.forEach((item) => (items[item.name] = 0));
      axios.get("/api/sales/salesorders").then((res) => {
        res.data.forEach((order) => {
          order.items.forEach(
            (item) => (items[item.name] = items[item.name] + 1)
          );
        });
        setData(items);
      });
    });
  }, []);
  return (
    <div className="mt-3">
      <h3>Product Sales Report</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">No. of Orders placed / Sold</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              Object.keys(data).map(function (d, idx) {
                return (
                  <tr key={idx}>
                    <td>{d}</td>
                    <td>{data[d]}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductSalesReport;
