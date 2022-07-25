import SalesOrderList from "./SalesOrderList";
import TitleSection from "../../../components/TitleSection";

const SalesOrders = () => {
  return (
    <div>
      <TitleSection
        title="Sales Orders"
        buttonText="New order"
        formLink="/sales/salesorders/add"
      />
      <SalesOrderList />
    </div>
  );
};
export default SalesOrders;
