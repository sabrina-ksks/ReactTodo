import React from "react";

import { useSetRecoilState } from "recoil";
import { dialogOpenState } from "../atoms/DialogOpen";

import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import TodoAppBar from "./TodoAppBar"
import TaskTable from "./TaskTable";
import RegisterDialog from "./RegisterDialog";

const Todo: React.FC = () => {
  const setOpen = useSetRecoilState(dialogOpenState);

  const handleOpen = () => setOpen(true);

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
      <RegisterDialog />
    </>
  );
};

export default Todo;