import React from "react";

import Box from "@mui/material/Box";

import TaskList from "./TaskList";

const TodoBody: React.FC = () => {
  return (
    <Box padding="1rem" textAlign="center">
      <TaskList />
    </Box>
  );
};

export default TodoBody;