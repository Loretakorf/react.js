import { CustomerSupportForm } from "../../components/CustomerSupportForm/CustomerSupportForm";
import "./CustomerSupportPage.css";
const CustomerSupportPage = (person) => {
  const onSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (let [fullName, value] of formData.entries()) {
      person[fullName] = value;
    }
    onSave?.();
  };
  return (
    <div className="support-page">
      <CustomerSupportForm onSave={onSave} />
    </div>
  );
};
export default CustomerSupportPage;
