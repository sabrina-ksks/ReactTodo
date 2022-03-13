import React from "react";

import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import TaskList from "./TaskList";

const TodoBody: React.FC = () => {
  return (
    <Box padding="2rem" textAlign="center">
      <TaskList />
      <Fab
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
    </Box>
  );
};

export default TodoBody;