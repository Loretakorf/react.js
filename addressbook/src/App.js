import { useState } from "react";
import Container from "./components/Container";
import AddressBookForm from "./components/AddressBookForm";
import AddressBookList  from "./components/AddressBookList";

function App() {
 
  const [state, setList] = useState([])
  const updateList = (name, lastName, phone) => {
    const newState = [...state, name, lastName, phone ];
    setList(newState)
   
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
