import Input from "./Input";
import { useState } from "react";

const formStyle = {
  display: "flex",
  height: "45px",
};

const buttonStyle = {
  borderRadius: 0,
  border: 0,
  backgroundColor: "#333",
  padding: "0.5rem",
  fontWeight: "bold",
  color: "#eee",
};

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState();
  const handleChange = (myValue) => setInputValue(myValue);
  const handleClick = () => {
    if(props.onSubmit) {
      props.onSubmit(inputValue)
    }
  };
 
  return (
    <div>
      <div style={formStyle}>
        <Input  onChange={handleChange} />
        <button style={buttonStyle} onClick={handleClick}>
          Add Todo
        </button>
      </div>
    </div>
  );
};
export default TodoForm;
