import PackagesList from "./PackagesList";
import TitleSection from "../../../components/TitleSection";

const Packages = () => {
  return (
    <div>
      <TitleSection
        title="Packages"
        formLink="/sales/packages/add"
        buttonText="New Package"
      />
      <PackagesList />
    </div>
  );
};
export default Packages;
