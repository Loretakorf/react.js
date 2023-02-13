import { useState } from "react";
import Container from "./components/Container";
import AddressBookForm from "./components/AddressBookForm";
import AddressBookList from "./components/AddressBookList";

function App() {
  const [state, setList] = useState([
    { name: "Justas", lastName: "Isaeff", phone: "+37034567891" },
  ]);
  const updateList = (stateName, stateLastName, stateUserNumber) => {
    const newState = [...state, {stateName, stateLastName, stateUserNumber}];
    
    setList(newState);
    console.log(newState);
  };

  return (
    <div>
      <Container>
        <AddressBookForm onSubmit={updateList} />
        <AddressBookList list={state} />
      </Container>
    </div>
  );
}

export default App;
