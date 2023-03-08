import { CustomerSupportForm } from "../../components/CustomerSupportForm/CustomerSupportForm";
import "./CustomerSupportPage.css";
const CustomerSupportPage = () => {
  const onSave = (e) => {
    e.preventDefault();
   

    onSave?.();
  };
  return (
    <div className="support-page">
      <CustomerSupportForm onSave={onSave} />
    </div>
  );
};
export default CustomerSupportPage;
