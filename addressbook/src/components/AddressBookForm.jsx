import Input from "./Input";
import { useState } from "react";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  height: "45px",
  width: "260px",
  marginTop: "30px",
  gap: "20px",
};

const buttonStyle = {
  borderRadius: 0,
  border: 0,
  backgroundColor: "#e7810d",
  padding: "0.5rem",
  fontWeight: "bold",
  color: "#eee",
  marginTop: "30px",
};

const AddressBookForm = (props) => {
  const [stateName, setStateName] = useState();
  const [stateLastName, setStateLastName] = useState();
  const [stateUserNumber, setStateUserNumber] = useState();

  const onFirstNameChange = (name) => setStateName(name);
  const onLastNameChange = (lastName) => setStateLastName(lastName);
 
  const onNumberChange = (phone) => {
    setStateUserNumber(Number(phone));
    
  };
  const handleClick = () => {
    if (props.onSubmit) {
      props.onSubmit(stateName, stateLastName, stateUserNumber);
     
    }
  };

  return (
    <div style={formStyle}>
      <Input label={"First name:"} onChange={onFirstNameChange}/>
      <Input label={"Last name:"} onChange={onLastNameChange} />
      <Input label={"Telephone number:"} onChange={onNumberChange} />
      <button style={buttonStyle} onClick={handleClick}>
        Add user
      </button>
    </div>
  );
};
export default AddressBookForm;
