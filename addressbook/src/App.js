import { useState } from "react";
import Container from "./components/Container";
import AddressBookForm from "./components/AddressBookForm";
import AddressBookList from "./components/AddressBookList";

let nextId = 0;
function App() {
  const [stateList, setStateList] = useState([
    { name: "Justas", lastName: "Isaeff", phone: "+37034567891" },
  ]);
  console.log(stateList);
  const updateList = (name, lastName, phone) => {
    setStateList([
      ...stateList,
      { id: nextId++, name: name, lastName: lastName, phone: phone },
    ]);
  };

  return (
    <div>
      <Container>
        <AddressBookForm onSubmit={updateList} />
        <AddressBookList list={stateList} />
      </Container>
    </div>
  );
}

export default App;
