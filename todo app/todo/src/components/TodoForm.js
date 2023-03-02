import { Button, Typography, Box, TextField } from "@mui/material";
import { postList } from "../servises/postList";

const TodoForm = ({ onSubmit, onClose }) => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Typography variant="h4">Add new Todo</Typography>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const todo = {
            completed: false,
          };
          for (let [name, value] of formData.entries()) {
            todo[name] = value;
          }
          await postList(todo);
          onSubmit?.();
          onClose?.();
        }}
      >
        <Box />
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            required
            id="todo-title"
            label="Title"
            name="title"
            fullWidth
          />
          <TextField
            required
            id="todo-description"
            label="description"
            name="Description"
            fullWidth
          />
          <Button variant="contained" type="submit">
            Add Todo
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default TodoForm;
