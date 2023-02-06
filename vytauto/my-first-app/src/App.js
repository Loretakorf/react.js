import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Container from "./components/Container";
import PageHeading from "./components/PageHeading";
import TodoList from "./components/TodoList";

// const list = [
//   "Todo item 1.",
//   "Todo item 2.",
//   "Todo item 3.",
//   "Todo item 4.",
//   "Todo item 5.",
//   "Todo item 6.",
//   "Todo item 7.",
//   "Todo item 8.",
//   "Todo item 9.",
// ];

function App() {
  const [list, setList] = useState([]);

  const updateList = (value) => {
    const newList = [...list, value];

    setList(newList);
  };
  return (
    <div>
      <Container>
        <PageHeading />
        <TodoForm
          onSubmit={updateList}
        />
        <TodoList list={list} />
      </Container>
    </div>
  );
}

export default App;
