import { useState } from "react";

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
    if(props.onChange) {
      props.onChange(myValue);
    }
  };

  return  <input style={inputStyle} value={value} onChange={handleChange} />;

};

export default Input;
