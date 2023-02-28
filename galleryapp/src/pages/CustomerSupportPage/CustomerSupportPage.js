import { CustomerSupportForm } from "../../components/CustomerSupportForm/CustomerSupportForm";
import "./CustomerSupportPage.css";
const CustomerSupportPage = () => {
  return (
    <div className="support-page">
      <CustomerSupportForm
        onSave={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          const person = {};
          for (let [fullName, value] of formData.entries()) {
            person[fullName] = value;
          }
          console.log(person);
        }}
      />
    </div>
  );
};
export default CustomerSupportPage;
