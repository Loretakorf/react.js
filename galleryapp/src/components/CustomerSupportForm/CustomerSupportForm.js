import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import Topic from "../Topic/Topic";
import Button from "../Button/Button";
import { useState } from "react";
import "./CustomerSupportForm.css";

export const CustomerSupportForm = () => {
  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleFullNameChange(e) {
    setPerson({
      ...person,
      fullName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  function handleMessageChange(e) {
    setPerson({
      ...person,
      message: e.target.value,
    });
  }
 

  const onSave = (props) => {
    setIsActive(!isActive);
    setError(error);
    setPerson(person);

    console.log(person);
    if (props.onSubmit) {
      props.onSubmit();
    }
  };

  
  return (
    <div className="wrapper">
      <Topic
        title="Contact customer support"
        paragraph="We take every request into a consideration and we will reach out to you as fast as possible"
      />
      <form className="form">
        <Input
          placeholder="Full name"
          label={isActive ? "Full Name" : ""}
          type="text"
          id="fullName"
          onChange={handleFullNameChange}
         
        />
       

        <Input
          placeholder="Email"
          label={isActive ? "Email" : ""}
          type="email"
          id="email"
          onChange={handleEmailChange}
          
        />

        <TextArea
          placeholder="Your message to us"
          label={isActive ? "Your message to us" : ""}
          id="message"
          onChange={handleMessageChange}
         
        />
      </form>

      <Button label={"Save"} className="form-btn" onClick={onSave} />
    </div>
  );
};
