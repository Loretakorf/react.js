const Dropdown = ({ setValue, dimensions }) => {
  console.log(dimensions);
  return (
    <div className="dropdown">
      <select onChange={setValue} dimensions={dimensions}>
       <option key={dimensions.cm}>cm</option>
       <option key={dimensions.cm}>in</option>
      </select>
    </div>
  );
};
export default Dropdown;
