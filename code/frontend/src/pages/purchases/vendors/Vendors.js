import TitleSection from "../../../components/TitleSection";
import VendorsList from "./VendorsList";

const Vendors = () => {
  return (
    <div>
      <TitleSection
        title="Vendors"
        buttonText="New Vendor"
        formLink="/purchases/vendors/add"
      />
      <VendorsList />
    </div>
  );
};
export default Vendors;
