import { useEffect, useRef } from "react";
import { useState, useMemo } from "react";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
 

    // always will run at least once
    // 1. on component creation
    //2. on dependency change(n+ times)
  useEffect(() => {
    setTodos([...todos, props.getCurrentTodo()]);
  }, [props.getCurrentTodo]);

  const todosList = useMemo(() => {
    const list = todos.map((todo) => 
        <p key={todo.id}>{todo.content}</p>
      )
      return list;// save return
  }, [todos])

  return (
    <>
    <button></button>
    {todosList}
      {/* {todos.map((todo) => (
        <p key={todo.id}>{todo.content}</p>
      ))} */}
    </>
  );
};
export default Todos;
