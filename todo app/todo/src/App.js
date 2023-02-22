import AddNewTodo from "./components/AddNewTodo";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Heading } from "./components/Heading";
import { getList } from "./servises/getList";
import { useEffect, useState } from "react";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList().then((data) => {
      setList(data.documents);
    });
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Heading />
        <AddNewTodo>
          <TodoForm />
        </AddNewTodo>

        {list.map((item) => (
          <TodoCard
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
