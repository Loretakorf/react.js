import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import Topic from "../Topic/Topic";
import Button from "../Button/Button";
import { useState } from "react";
// import { inputs } from "../../constants/inputs";
import "./CustomerSupportForm.css";

export const CustomerSupportForm = () => {
  const [person, setPerson] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onNameChange = (e) => {
    setPerson({ ...person, fullName: e.target.value });
  };
  const onEmailChange = (e) => {
    setPerson({ ...person, email: e.target.value });
  };
  const onMessageChange = (e) => {
    setPerson({ ...person, message: e.target.value });
  };

  // console.log(person);
  return (
    <div className="wrapper">
      <Topic
        title="Contact customer support"
        paragraph="We take every request into a consideration and we will reach out to you as fast as possible"
      />
      <form className="form">
        <Input
          placeholder="Full Name"
          label={"Your full name"}
          id="fullName"
          value={person.fullName}
          error="Full name should be 3-16 characters"
          onChange={onNameChange}
          required
        />
        <Input
          placeholder="Email"
          label={"Email"}
          id="email"
          error="It should be a valid email address"
          onChange={onEmailChange}
          required
        />
        <TextArea
          placeholder="Your message to us"
          label={"Your message to us"}
          id="message"
          onChange={onMessageChange}
          error="Your message should from 10 characters"
          required
        />
      </form>
      <h1 className="hi">Hi, {person.fullName}</h1>
      <Button label={"Save"} className="form-btn" onClick={handleSubmit} />
    </div>
  );
};
