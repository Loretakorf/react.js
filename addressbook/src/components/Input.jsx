import { useState } from "react";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
};
const inputStyle = {
  borderRadius: 0,
  border: 0,
  backgroundColor: "#eee",
  padding: "0.5rem",
};

const Input = (props) => {
  const [value, setValue] = useState(props.value || "");

  const handleChange = (event) => {
    const myValue = event.target.value;
   
    setValue(myValue);
    if (props.onChange) {
      props.onChange(myValue);
    }
  };
 
  return (
    <div style={wrapperStyle}>
      <label>{props.label}</label>
      <input
        type={"text"}
        style={inputStyle}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
