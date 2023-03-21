import { useCallback, useState } from "react";
import Todos from "./components/Todos";
import "./App.css";

// const getId = () => Math.random();

// const generateTodos = (length) => {
//   const arr = new Array(length).fill(null);
//   const nextId = getId()
//  return arr.map(() => ({id: getId, content: "Walk a dog"}))
  
// }

// const todos = generateTodos(500)

const todos = [
  { id: 1, content: "walk dog" },
  { id: 2, content: "walk cat" },
  { id: 3, content: "study" },
  { id: 4, content: "read book" },
];
function App() {
  const [currentTodoIndex, setCurrentTodo] = useState(0);
  const [count, setCount] = useState(0);

  const getNextTodo = () => {
    setCurrentTodo(currentTodoIndex + 1);
  };
  const onClick = () => {
    setCount(count + 1);
  };

  // used for functions to be memoized(cached)
  // save in memory
  const getCurrentTodo = useCallback(() => {
    return todos[currentTodoIndex];
  }, [currentTodoIndex, todos]);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClick}>increase Count</button>
      <button onClick={getNextTodo}>Get next Todo</button>
      <Todos getCurrentTodo={getCurrentTodo} />

    </div>
  );
}

export default App;
