import TitleSection from "../../../components/TitleSection";
import SalesReturnsList from "./SalesReturnsList";

const SalesReturns = () => {
  return (
    <div>
      <TitleSection
        title="Sales Returns"
        formLink="/sales/sales-returns/add"
        buttonText="New"
      />
      <SalesReturnsList />
    </div>
  );
};
export default SalesReturns;
