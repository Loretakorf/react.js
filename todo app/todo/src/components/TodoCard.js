import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteList } from "../servises/deleteList";


const useDelete = (id, onDelete) => {
  const [open, setOpen] = useState();

  const openDialogDelete = () => {
    setOpen(true);
  };
  const closeDeleteDialog = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    deleteList(id).then(() => {
      if (onDelete) onDelete();
    });
  };
  return {
    openDialogDelete,
    closeDeleteDialog, 
    handleDelete,
    isOpen: open,
  }
}

const TodoCard = ({ title, description, id, onDelete }) => {
  const{openDialogDelete, closeDeleteDialog, handleDelete, isOpen} = useDelete(id, onDelete);
  useDelete(id, onDelete)

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id}
        id={id}
      >
        <Typography fontWeight="bold">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" gap={2} alignItems="self-start">
          <Typography>{description}</Typography>
          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={openDialogDelete}
          >
            Delete
          </Button>
          <Dialog open={isOpen} onClose={closeDeleteDialog}>
            <DialogTitle id="alert-dialog-title"></DialogTitle>
            Are you sure you want to delete '{title}'?
            <DialogActions>
              <Button onClick={openDialogDelete}>Cancel</Button>
              <Button autoFocus onClick={handleDelete}>
                Confirm Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
export default TodoCard;
