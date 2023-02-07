import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ClickedMeTimes from "./components/ClickedMeTimes";

function App() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter((prevState) => prevState + 1);
  };
  return (
    <div className="App">
      <Button
        label="Press
      
      me"
        onClick={onClick}
      />
      <ClickedMeTimes counter={counter} />
    </div>
  );
}

export default App;
