const formStyle = {
  display: "flex",
  height: "45px",
};

const inputStyle = {
  borderRadius: 0,
  border: 0,
  backgroundColor: "#eee",
  padding: "0.5rem",
};
const buttonStyle = {
  borderRadius: 0,
  border: 0,
  backgroundColor: "#333",
  padding: "0.5rem",
  fontWeight: "bold",
  color: "#eee",
};
const TodoForm = () => {
  return (
    <div>
      <div style={formStyle}>
        <input style={inputStyle} />
        <button style={buttonStyle}>Add Todo</button>
      </div>
    </div>
  );
};
export default TodoForm;
