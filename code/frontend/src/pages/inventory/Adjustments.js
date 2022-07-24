import AdjustmentsList from "../../components/Inventory/AdjustmentsList";
import TitleSection from "../../components/TitleSection";

const Adjustments = () => {
  return (
    <div>
      <TitleSection
        title="Adjustments"
        buttonText="+ Adjustment"
        formLink="/inventory/adjustments/add"
      />
      <AdjustmentsList />
    </div>
  );
};
export default Adjustments;
