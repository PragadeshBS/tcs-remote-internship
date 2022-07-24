import TitleSection from "../../../components/TitleSection";
import PaymentList from "./PaymentList";

const Payments = () => {
  return (
    <div>
      <TitleSection
        title="Payments"
        buttonText="New payment"
        formLink="/sales/payments/add"
      />
      <PaymentList />
    </div>
  );
};
export default Payments;
