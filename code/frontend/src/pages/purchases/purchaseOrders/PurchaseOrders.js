import TitleSection from "../../../components/TitleSection";
import PurchaseOrdersList from "./PurchaseOrdersList";

const PurchasesOrders = () => {
  return (
    <div>
      <TitleSection
        title="Purchase Orders"
        buttonText="New order"
        formLink="/purchases/purchase-orders/add"
      />
      <PurchaseOrdersList />
    </div>
  );
};
export default PurchasesOrders;
