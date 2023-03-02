import { useState } from "react";
import { deleteList } from "../servises/deleteList";

export const useDelete = (id, onDelete) => {
  const [open, setOpen] = useState();

  const openDialogDelete = () => {
    setOpen(true);
  };
  const closeDeleteDialog = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    await deleteList(id);
    // if (onDelete) onDelete();
    onDelete?.();
  };
  return {
    openDialogDelete,
    closeDeleteDialog,
    handleDelete,
    isOpen: open,
  };
};
