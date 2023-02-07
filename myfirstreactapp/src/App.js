import "./App.css";
import Input from "./components/Input/Input";
import { useState } from "react";

function App() {
  const [value, setValue] = useState();

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className="App">
      <Input label="Find me:" onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}

export default App;
