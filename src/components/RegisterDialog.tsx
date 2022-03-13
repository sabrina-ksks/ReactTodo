import React from "react";

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
        <Button color="primary">登録</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;