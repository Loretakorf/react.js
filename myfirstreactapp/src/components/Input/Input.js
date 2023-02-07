import "./Input.css";


const Input = (props) => {
  console.log(props);
  const onChange = (event) => {
    props.onChange(event.target.value);
    
  }

  return (
    <div>
      <label>{props.label}</label>
      <input  onChange={onChange}/>
    </div>
  );
};
export default Input;
