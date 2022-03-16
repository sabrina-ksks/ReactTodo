import React, { useState } from "react";

import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import TodoAppBar from "./TodoAppBar"
import TaskTable from "./TaskTable";
import RegisterDialog from "./RegisterDialog";

const Todo: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TodoAppBar />
      <Box padding="2rem" textAlign="center">
        <TaskTable />
      </Box>
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="add"
        sx={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem'
        }}
      >
        <AddIcon />
      </Fab>
      <RegisterDialog open={open} onClose={handleClose} />
    </>
  );
};

export default Todo;