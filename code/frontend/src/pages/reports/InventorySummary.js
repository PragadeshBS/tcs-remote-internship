import { useEffect, useState } from "react";
import axios from "axios";

const InventorySummary = () => {
  const [quantityInHand, setQuantityInHand] = useState(0);
  const [quantityToReceive, setQuantityToReceive] = useState(0);
  useEffect(() => {
    let temp = 0,
      temp2 = 0;
    axios.get("/api/inventory/items").then((res) => {
      res.data.forEach((item) => {
        temp += item.openingStock;
        temp2 += item.openingStock - item.reorderPoint;
      });
      setQuantityInHand(temp);
      setQuantityToReceive(temp2);
    });
  }, []);
  return (
    <div className="border w-50 rounded d-block mx-auto">
      <div className="border bg-light text-success rounded p-3">
        <h3>Inventory Summary Report</h3>
      </div>
      <div className="row m-2">
        <div className="col-6">
          <h6>Quantity in hand</h6>
          <p>{quantityInHand}</p>
        </div>
        <div className="col-6">
          <h6>Quantity to be received</h6>
          <p>{quantityToReceive}</p>
        </div>
      </div>
    </div>
  );
};
export default InventorySummary;
