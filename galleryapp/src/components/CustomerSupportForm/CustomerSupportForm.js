import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import Topic from "../Topic/Topic";
import Button from "../Button/Button";
import { useState } from "react";
// import { inputs } from "../../constants/inputs";
import "./CustomerSupportForm.css";

export const CustomerSupportForm = () => {
  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    message: "",
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
   const onSave = (props) => {
  
    if (props.onSubmit) {
      props.onSubmit();
    }
  }
console.log(person);
  return (
    <div className="wrapper">
      <Topic
        title="Contact customer support"
        paragraph="We take every request into a consideration and we will reach out to you as fast as possible"
      />
      <form className="form" onSubmit={handleSubmit}>
        <Input
         placeholder="Full Name"
         label={"Your full name"}
         name="name"
         id="fullName"
         pattern="^[A-Za-z0-9]{3,16}$"
         error="Full name should be 3-16 characters"
         onChange={onChange}/>
        <Input
         placeholder="Email"
         name="email"
         label={"Email"}
         id="email"
         error="It should be a valid email address"
         onChange={onChange}/>
        <TextArea
          placeholder="Your message to us"
          label={"Your message to us"}
          id="message"
          name="message"
          onChange={onChange}
        />
      </form>

      <Button label={"Save"} className="form-btn" onClick={onSave}/>
    </div>
  );
};
