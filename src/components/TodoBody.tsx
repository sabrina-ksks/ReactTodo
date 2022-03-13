import React, { useState } from "react";

import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import TaskList from "./TaskList";
import RegisterDialog from "./RegisterDialog";

const TodoBody: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box padding="2rem" textAlign="center">
      <TaskList />
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
    </Box>
  );
};

export default TodoBody;