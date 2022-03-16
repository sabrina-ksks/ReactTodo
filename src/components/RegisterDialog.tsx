import React from "react";

import { useRecoilValue ,useRecoilState, useResetRecoilState } from "recoil";
import { dialogOpenState } from "../atoms/DialogOpen";
import { dialogContentState } from "../atoms/DialogContent";
import { tasksState } from "../atoms/Tasks";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import RegisterDialogContent from "./RegisterDialogContent";

const RegisterDialog: React.FC = () => {
  const [open, setOpen] = useRecoilState(dialogOpenState);
  const dialogContent = useRecoilValue(dialogContentState);
  const resetDialogContent = useResetRecoilState(dialogContentState);
  const [tasks, setTasks] = useRecoilState(tasksState);

  const handleClose = () => setOpen(false);

  const handleRegister = () => {
    setTasks([...tasks, dialogContent]);
    resetDialogContent();
    handleClose();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="register-dialog"
      fullWidth
    >
      <DialogTitle>タスク登録</DialogTitle>
      <RegisterDialogContent />
      <DialogActions>
        <Button onClick={handleClose} color="primary">戻る</Button>
        <Button onClick={handleRegister} color="primary">登録</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;