import { CustomerSupportForm } from "../../components/CustomerSupportForm/CustomerSupportForm";
import "./CustomerSupportPage.css";
const CustomerSupportPage = (onSave) => {

  return (
    <div className="support-page">
      <CustomerSupportForm onSave={onSave} />
    </div>
  );
};
export default CustomerSupportPage;
