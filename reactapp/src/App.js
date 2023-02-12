import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ClickedMeTimes from "./components/ClickedMeTimes";
import { List } from "./components/List/List";

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
      <List items={[{name:'duona'}, {name:'pienas'}, { name: 'vistiena'}]}/>
    </div>
  );
}

export default App;
