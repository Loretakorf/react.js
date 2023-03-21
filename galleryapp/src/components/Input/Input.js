import "./Input.css";
import { useState } from "react";
export const Input = ({ placeholder, type, label, onChange, id, error }) => {
  const [focused, setFocused] = useState(false);
  const handleIsFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        required
        label={label}
        placeholder={placeholder}
        type={type}
        id={id}
        error={error}
        onBlur={handleIsFocused}
        focused={focused.toString()}
        onChange={onChange}
      />
      <span>{error}</span>
    </div>
  );
};
