import InvoicesList from "./InvoicesList";
import TitleSection from "../../../components/TitleSection";

const Invoices = () => {
  return (
    <div>
      <TitleSection
        title="Invoices"
        buttonText="New Invoice"
        formLink="/sales/invoices/add"
      />
      <InvoicesList />
    </div>
  );
};
export default Invoices;
