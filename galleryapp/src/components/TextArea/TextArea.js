import "./TextArea.css";
export const TextArea = ({placeholder, label, onChange, id, error}) => {
  return (
    <div className="textarea">
      <label>{label}</label>
      <textarea
      className={error ? "error" : "text-area"}
      placeholder={placeholder}
      label={label}
      onChange={onChange}
      id={id}
      error={error}
    />
    
    </div>
  );
};
