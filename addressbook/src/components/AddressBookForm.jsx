import Input from "./Input";
import { useState } from "react";
const formStyle = {
  display: "flex",
  flexDirection: "column",
  height: "45px",
  width: "200px",
  marginTop: "30px",
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

const AddressBookForm = (name, lastName, number) => {
  const [stateName, setStateName] = useState();
  const [stateLastName, setStateLastName] = useState();
  const [stateUserNumber, setStateUserNumber] = useState();

  const handleChange = () => {
    if (name) {
      setStateName(stateName);
      console.log(name)
    } else if (lastName) {
      setStateLastName(stateLastName);
    } else if (number) {
      setStateUserNumber(stateUserNumber);
    }
  };
  const handleClick = (props) => {
    if (props.onSubmit) {
      props.onSubmit();
    }
  };
  return (
    <div style={formStyle}>
      <Input onChange={handleChange} />

      <button style={buttonStyle} onClick={handleClick}>
        Add user
      </button>
    </div>
  );
};
export default AddressBookForm;
