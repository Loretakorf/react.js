import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 552,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  zIndex: 1000,
};

const AddNewTodo = ({children}) => {
  const [open, setOpen] = useState(false);
  return (
    <Box marginBottom={4}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add New Todo
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </Box>
  );
};
export default AddNewTodo;
