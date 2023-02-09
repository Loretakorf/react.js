const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
const inputStyle = {
  borderRadius: 0,
  border: 0,
  backgroundColor: "#eee",
  padding: "0.5rem",
};

const Input = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div style={wrapperStyle}>
      <input
        placeholder="First Name"
        type="text"
        style={inputStyle}
        value={props.name}
        onChange={handleChange}
      />

      <input
        placeholder="Last Name"
        type="text"
        style={inputStyle}
        value={props.lastName}
        onChange={handleChange}
      />

      <input
        placeholder="Telephone Number"
        type="number"
        style={inputStyle}
        value={props.number}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
