import Container from "./components/Container";
import AddressBookForm from "./components/AddressBookForm";

// import { useState } from "react";
function App() {
  // const [] = useState();
const updateList = () => {

}
  return (
    <div>
      <Container>
        <AddressBookForm onSubmit={updateList}/>
      </Container>
    </div>
  );
}

export default App;
