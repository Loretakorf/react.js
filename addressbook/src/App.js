import { useState } from "react";
import Container from "./components/Container";
import AddressBookForm from "./components/AddressBookForm";
import AddressBookList from "./components/AddressBookList";

const user = [{name: "Justas", lastName: "Isaeff", phone: "+37034567891" }]


function App() {
  const [userList, setList] = useState({user});
 
  const updateList = (value) => {
    const newUserList = [...userList];
    const result = newUserList.push(value)
    setList(result);
    
  };

  return (
    <div>
      <Container>
        <AddressBookForm onSubmit={updateList} />
        <AddressBookList list={userList} />
      </Container>
    </div>
  );
}

export default App;
