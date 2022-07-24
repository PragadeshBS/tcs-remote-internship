import DeliveryChallansList from "./DeliveryChallansList";
import TitleSection from "../../../components/TitleSection";

const DeliveryChallans = () => {
  return (
    <div>
      <TitleSection
        title="Delivery Challans"
        buttonText="New Challan"
        formLink="/sales/delivery-challan/add"
      />
      <DeliveryChallansList />
    </div>
  );
};
export default DeliveryChallans;
