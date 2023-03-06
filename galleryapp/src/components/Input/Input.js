import "./Input.css";


export const Input = ({ placeholder, type, label, onChange, id, error }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        className={error ? "error" : "input"}
        label={label}
        placeholder={placeholder}
        type={type}
        id={id}
        error={error}
        onChange={onChange}
        required
      />
      {error && <p className="error">Error</p>}
    </div>
  );
};
