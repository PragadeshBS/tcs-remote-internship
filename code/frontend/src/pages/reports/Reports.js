import InventoryAgingSummary from "./InventoryAgingSummary";
import InventorySummary from "./InventorySummary";
import ProductSalesReport from "./ProductSalesReport";
import SalesByItemCustomer from "./SalesByItemCustomer";

const Reports = () => {
  return (
    <div>
      <h1 className="display-3">Reports</h1>
      <div className="m-2">
        <InventorySummary />
        <InventoryAgingSummary />
        <ProductSalesReport />
        <SalesByItemCustomer />
      </div>
    </div>
  );
};
export default Reports;
