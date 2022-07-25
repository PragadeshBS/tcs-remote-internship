import TitleSection from "../../../components/TitleSection";
import BillsList from "./BillsList";

const Bills = () => {
  return (
    <div>
      <TitleSection
        title="Bills &amp; payments"
        buttonText="New bill"
        formLink="/purchases/bills/add"
      />
      <BillsList />
    </div>
  );
};
export default Bills;
