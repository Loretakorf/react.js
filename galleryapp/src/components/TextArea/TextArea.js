import "./TextArea.css";
import { useState } from "react";
export const TextArea = ({
  placeholder,
  label,
  onChange,
  id,
  error,
  pattern,
}) => {
  const [focused, setFocused] = useState(false);
  const handleIsFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="textarea">
      <label className="input-label">{label}</label>
      <textarea
        required
        placeholder={placeholder}
        label={label}
        onChange={onChange}
        id={id}
        error={error}
        pattern={pattern}
        onBlur={handleIsFocused}
        focused={focused.toString()}
      />
      <span className="span">Your message should from 10 characters</span>
    </div>
  );
};
