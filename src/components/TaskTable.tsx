import React from "react";

import { useRecoilState } from "recoil";
import { tasksState } from "../atoms/Tasks";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Rating from "@mui/material/Rating";

const TaskTable: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const handleClick = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, key: number) => {
    const newTasks = tasks.map((task, index) => {
      return {
        done: index === key ? !task.done : task.done,
        content: task.content,
        deadline: task.deadline,
        priority: task.priority
      };
    });

    setTasks(newTasks);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "max-content" }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>内容</TableCell>
            <TableCell align="center">期限</TableCell>
            <TableCell align="center">優先度</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow
              key={index}
              onClick={(e) => {handleClick(e, index)}}
              hover
            >
              <TableCell padding="checkbox">
                <Checkbox checked={task.done} />
              </TableCell>
              <TableCell>
                {task.content}
              </TableCell>
              <TableCell sx={{ width: "8rem" }}>
                {task.deadline?.toLocaleString().slice(0, -3)}
              </TableCell>
              <TableCell align="center" sx={{ width: "10rem" }}>
                <Rating
                  value={task.priority}
                  readOnly
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;