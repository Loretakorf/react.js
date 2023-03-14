import "./Input.css";
import { useState } from "react";
export const Input = ({
  placeholder,
  type,
  label,
  onChange,
  id,
  error,
  name,
  errorMessage,
  pattern
}) => {
  const[ focused, setFocused] = useState(false)
  const handleIsFocused = (e) => {
    setFocused(true)
  }
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        required
        pattern={pattern}
        label={label}
        placeholder={placeholder}
        type={type}
        id={id}
        error={error}
        onBlur={handleIsFocused}
        focused={focused.toString()}
        onChange={onChange}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
