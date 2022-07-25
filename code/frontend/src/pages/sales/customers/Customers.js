import CustomersList from "./CustomersList";
import TitleSection from "../../../components/TitleSection";

const Customers = () => {
  return (
    <div>
      <TitleSection
        title="Customers"
        buttonText="New Customer"
        formLink="/sales/customers/add"
      />
      <CustomersList />
    </div>
  );
};
export default Customers;
