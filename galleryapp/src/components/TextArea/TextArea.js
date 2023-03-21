import "./TextArea.css";
import { useState } from "react";
export const TextArea = ({
  placeholder,
  label,
  onChange,
  id,
  error,
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
        cols="30"
        row="10"
        onBlur={handleIsFocused}
        focused={focused.toString()}
      />
      <span className="span">{error}</span>
    </div>
  );
};
