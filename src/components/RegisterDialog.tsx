import React from "react";

import { useRecoilValue ,useRecoilState, useResetRecoilState } from "recoil";
import { dialogContentState } from "../atoms/RegisterDialogContent";
import { tasksState } from "../atoms/Tasks";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import RegisterDialogContent from "./RegisterDialogContent";

type Props = {
  open: boolean;
  onClose: () => void;
};

const RegisterDialog: React.FC<Props> = ({ open, onClose }) => {
  const dialogContent = useRecoilValue(dialogContentState);
  const resetDialogContent = useResetRecoilState(dialogContentState);
  const [tasks, setTasks] = useRecoilState(tasksState);

  const handleRegister = () => {
    setTasks([...tasks, dialogContent]);
    resetDialogContent();
    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="register-dialog"
      fullWidth
    >
      <DialogTitle>タスク登録</DialogTitle>
      <RegisterDialogContent />
      <DialogActions>
        <Button onClick={onClose} color="primary">戻る</Button>
        <Button onClick={handleRegister} color="primary">登録</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;