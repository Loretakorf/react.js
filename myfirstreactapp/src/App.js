import "./App.css";
import Input from "./components/Input/Input";
import { useState } from "react";
import List from "./components/List/List";
const data = [
  {
    name: "Duona",
    id: Math.random(),
  },
  {
    name: "Vistiena",
    id: Math.random(),
  },
  {
    name: "Cipsai",
    id: Math.random(),
  },
  {
    name: "Pienas",
    id: Math.random(),
  },
  {
    name: "Vaistai",
    id: Math.random(),
  },
];

function App() {
  const [filteredData, setFilteredData] = useState(data);
  const [emptyProductsMessage, setEmptyProductsMessage] = useState("");

  const handleChange = (value) => {
    const result = !value
      ? data
      : data.filter((data) => {
          return data.name.toLowerCase().startsWith(value.toLowerCase());
        });

    setFilteredData(result);
    setEmptyProductsMessage(
      result.length
        ? ""
        : `No products have been found based on your search ${value} result`
    );
  };

  return (
    <div className="App">
      <Input label="Search by: " onChange={handleChange} />
      <List items={filteredData} infoMessage={emptyProductsMessage} />
    </div>
  );
}

export default App;
