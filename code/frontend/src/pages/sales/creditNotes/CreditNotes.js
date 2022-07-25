import TitleSection from "../../../components/TitleSection";
import CreditNotesList from "./CreditNotesList";

const CreditNotes = () => {
  return (
    <div>
      <TitleSection
        title="Credit Notes"
        buttonText="New"
        formLink="/sales/credit-notes/add"
      />
      <CreditNotesList />
    </div>
  );
};
export default CreditNotes;
