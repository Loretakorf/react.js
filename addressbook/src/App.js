import { useState } from "react";
import Container from "./components/Container";
import AddressBookForm from "./components/AddressBookForm";
import AddressBookList from "./components/AddressBookList";

function App() {
  const [stateList, setStateList] = useState([
    { name: "Jonas", surname: "Jonaitis", phone: "+370 123 45678" },
  ]);
  console.log(stateList);

  /*** user {* name: string,* surname: string,* phone: string,* }* * list [user, user, ...]* * someList = list[]* * * new List = [...someList, user]* * */
  const onShow = (name, surname, phone) => {
    setStateList([
      ...stateList,
      { name: name, surname: surname, phone: phone },
    ]);
  };

  return (
    <div>
      <Container>
        <AddressBookForm onSubmit={onShow} />
        <AddressBookList lists={stateList} />
      </Container>
    </div>
  );
}

export default App;
