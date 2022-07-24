import TitleSection from "../../../components/TitleSection";
import VendorCreditList from "./VendorCreditList";

const VendorCredits = () => {
  return (
    <div>
      <TitleSection
        title="Vendor Credits"
        buttonText="New"
        formLink="/purchases/vendor-credits/add"
      />
      <VendorCreditList />
    </div>
  );
};
export default VendorCredits;
